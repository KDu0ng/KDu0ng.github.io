const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".animate")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".animate")[1].classList.add("fadeInRight");
            document.querySelectorAll(".animate")[2].classList.add("fadeInLeft");
            document.querySelectorAll(".animate")[3].classList.add("fadeInRight");
        }
    })
})

observer.observe(document.querySelector(".observeThis"));