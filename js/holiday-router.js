(function () {
    const params = new URLSearchParams(window.location.search);
    if (params.has("skipHolidayRedirect")) {
        return;
    }

    function isHanukkah(hDate) {
        const monthName = hDate.getMonthName();
        const day = hDate.getDate();
        const kislevHanukkah = monthName === "Kislev" && day >= 25;
        const tevetHanukkah = monthName === "Tevet" && day <= 2;
        return kislevHanukkah || tevetHanukkah;
    }

    function getHolidaySlug() {
        if (!window.Hebcal || !Hebcal.HDate) {
            return null;
        }

        const today = new Hebcal.HDate();

        if (isHanukkah(today)) {
            return "hanukkah";
        }

        return null;
    }

    function redirectToHoliday(slug) {
        if (!slug) return;

        const holidayPath = `/holidays/${slug}/index.html`;
        const currentPath = window.location.pathname;
        const alreadyOnHoliday = currentPath.includes(`/holidays/${slug}`);

        if (!alreadyOnHoliday) {
            window.location.href = holidayPath;
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        const slug = getHolidaySlug();
        redirectToHoliday(slug);
    });
})();
