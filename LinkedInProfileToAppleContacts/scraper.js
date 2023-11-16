function get_linkedin_url() {
    let url = decodeURIComponent(window.location.href);
    url = url.match(/https:\/\/www.linkedin.com\/in\/([^/]+)/)[0];
    return url;
}

function get_name() {
    const full_name_element = document.querySelector(
        ".text-heading-xlarge.inline.t-24.v-align-middle.break-words"
    );
    const full_name = full_name_element
        ? full_name_element.textContent.trim().split(" ")
        : "";
    const first_name = full_name ? full_name[0] : "";
    const last_name = full_name ? full_name[1] : "";
    return [first_name, last_name];
}

function get_profile_picture_url() {
    const profile_picture_element = document.querySelector(
        ".pv-top-card-profile-picture__image.pv-top-card-profile-picture__image--show.evi-image.ember-view"
    );
    const profile_picture = profile_picture_element
        ? profile_picture_element.getAttribute("src").trim()
        : "";
    return profile_picture;
}

function get_company() {
    let experience_element = document.querySelector(
        ".artdeco-card.ember-view.relative.break-words.pb3.mt2 div#experience"
    ).parentElement;

    let last_company_name = "";
    let last_company_position = "";

    last_company = experience_element.querySelector("li");
    if (last_company) {
        if (last_company.querySelector(".pvs-entity__path-node")) {
            const last_company_name_element =
                last_company.querySelector("div > span");
            const last_company_position_element = last_company
                .querySelector("li")
                .querySelector("span[aria-hidden=true]");

            last_company_name = last_company_name_element
                ? last_company_name_element.textContent.trim()
                : "";
            last_company_position = last_company_position_element
                ? last_company_position_element.textContent.trim()
                : "";
        } else {
            const last_company_name_element =
                last_company.querySelector("div > span > span");
            const last_company_position_element =
                last_company.querySelector("div > span");

            last_company_name = last_company_name_element
                ? last_company_name_element.textContent.trim().split(" · ")[0]
                : "";
            last_company_position = last_company_position_element
                ? last_company_position_element.textContent.trim()
                : "";
        }
    }

    return [last_company_name, last_company_position];
}

function get_website_urls(element) {
    const websites_list_element = element.querySelector("ul");

    if (websites_list_element) {
        const websites = [];

        const url_elements = websites_list_element.querySelectorAll("a");
        const label_elements = websites_list_element.querySelectorAll("span");

        for (let i = 0; i < url_elements.length; i++) {
            const url_element = url_elements[i];
            const label_element = label_elements[i];

            const website_url = url_element.getAttribute("href").trim();
            const website_label = label_element.textContent
                .replace(/\(([^)]+)\)/, "$1")
                .trim()
                .toLowerCase();

            websites.push({
                URL: website_url,
                LABEL: website_label,
            });
        }

        return websites;
    }

    return null;
}

function get_phone_number(element) {
    const phone_number_element = element.querySelectorAll("ul > li > span");

    if (phone_number_element) {
        const number = phone_number_element
            ? phone_number_element[0].textContent.trim()
            : "";
        const type = phone_number_element
            ? phone_number_element[1].textContent
                  .replace(/\(([^)]+)\)/, "$1")
                  .trim()
                  .toUpperCase()
            : "";
        return { NUMBER: number, TYPE: type };
    }

    return null;
}

function get_address(element) {
    const address_element = element.querySelector("div > a");
    const address = address_element ? address_element.textContent.trim() : "";
    return address;
}

function get_email(element) {
    const email_element = element.querySelector("div > a");
    const email = email_element ? email_element.textContent.trim() : "";
    return email;
}

function get_twitter_url(element) {
    const twitter_element = element.querySelector("ul > li > a");
    const twitter_url = twitter_element
        ? twitter_element.getAttribute("href").trim()
        : "";
    return twitter_url;
}

function get_birthday(element) {
    const birthday_element = element.querySelector("div > span");
    const birthday = birthday_element
        ? birthday_element.textContent.trim()
        : "";
    return birthday;
}

function get_connection_date(element) {
    const connected_date_element = element.querySelector("div > span");
    const connected_date = connected_date_element
        ? connected_date_element.textContent.trim()
        : "";
    return connected_date;
}

function waitForElementToExist(selector) {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(() => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            subtree: true,
            childList: true,
        });
    });
}

async function main() {
    // JSON Object of LinkedIn Information
    const linkedin_info = {
        PROFILE_PICTURE_URL: null,
        LAST_NAME: null,
        FIRST_NAME: null,
        LAST_COMPANY_NAME: null,
        LAST_COMPANY_POSITION: null,
        PHONE: null,
        EMAIL: null,
        WEBSITES: null,
        ADDRESS: null,
        BIRTHDAY: null,
        LINKEDIN_URL: null,
        TWITTER_URL: null,
        CONNECTION_DATE: null,
    };

    linkedin_info.LINKEDIN_URL = get_linkedin_url();

    const [first_name, last_name] = get_name();
    linkedin_info.FIRST_NAME = first_name;
    linkedin_info.LAST_NAME = last_name;

    linkedin_info.PROFILE_PICTURE_URL = get_profile_picture_url();

    const [last_company_name, last_company_position] = get_company();
    linkedin_info.LAST_COMPANY_NAME = last_company_name;
    linkedin_info.LAST_COMPANY_POSITION = last_company_position;

    // Click on the contact info button
    document.getElementById("top-card-text-details-contact-info").click();

    return waitForElementToExist(
        ".pv-profile-section__section-info.section-info"
    ).then((contact_info_element) => {
        // Loop through contact info
        Array.from(contact_info_element.children).forEach((element) => {
            const contact_header_element = element.querySelector(
                ".pv-contact-info__header"
            );
            const contact_header = contact_header_element
                ? contact_header_element.textContent.trim()
                : "";

            switch (contact_header) {
                case "Website":
                case "Websites":
                    linkedin_info.WEBSITES = get_website_urls(element);
                    break;
                case "Phone":
                    linkedin_info.PHONE = get_phone_number(element);
                    break;
                case "Address":
                    linkedin_info.ADDRESS = get_address(element);
                    break;
                case "Email":
                    linkedin_info.EMAIL = get_email(element);
                    break;
                case "Twitter":
                    linkedin_info.TWITTER_URL = get_twitter_url(element);
                    break;
                case "Birthday":
                    linkedin_info.BIRTHDAY = get_birthday(element);
                    break;
                case "Connected":
                    linkedin_info.CONNECTION_DATE =
                        get_connection_date(element);
                    break;
            }
        });

        return linkedin_info;
    });
}

main().then((LINKEDIN_INFO) => {
    // Close contact window
    document.querySelector("[data-test-modal-close-btn]").click();
    // console.log(LINKEDIN_INFO);
    completion(LINKEDIN_INFO);
});
