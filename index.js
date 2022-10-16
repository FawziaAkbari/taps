const home_btn = document.getElementById("home")
const profile_btn = document.getElementById("profile")
const contuct_btn = document.getElementById("contuct")
const paragraph = document.getElementById("paragraphs")

home_btn.addEventListener("click", function(e) {
    e.preventDefault;
    paragraph.innerHTML = `<span class="bold">This is some placeholder content the Home tab's associated content.</span> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility. You can use it with tabs, <span class="nav">nav-powered</span> navigation.`
})


profile_btn.addEventListener("click", function(e) {
    e.preventDefault;
    paragraph.innerHTML = `<span class="bold">This is some placeholder content the Profile tab's associated content.</span> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility. You can use it with tabs, <span class="nav">nav-powered</span> navigation.`
})

contuct_btn.addEventListener("click", function(e) {
    e.preventDefault;
    paragraph.innerHTML = `<span class="bold">This is some placeholder content the Contauct tab's associated content.</span> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility. You can use it with tabs, <span class="nav">nav-powered</span> navigation.`
})