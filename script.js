const dollar = document.querySelector(".dollar")

const dollar2 = document.querySelector(".dollar2")
const slide = document.querySelector(".slide")
const switcher = document.querySelector(".toggle-switch")
const pageview = document.querySelector(".pageview")

  slide.oninput = (()=>{
    currentValue = slide.value;
    if(switcher.checked){
      clicked(currentValue)
    }else{
    canceled(currentValue)
  }
  let value = slide.value
  slide.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${value * 12.5}%, hsl(174, 77%, 80%) ${value}%,
  hsl(224, 65%, 95%) ${value}%, hsl(224, 65%, 95%) ${value}%)`
  })

  let currentValue = slide.value;
  function clicked(item){
    dollar.innerHTML = `$${(item * 48).toFixed(2)}`
    dollar2.innerHTML = `$${(item * 48).toFixed(2)}`
    pageview.innerHTML = `${(item * 25)}K PAGEVIEWS`
  }

  function canceled(item){
    dollar.innerHTML = `$${(item * 4).toFixed(2)}`
    dollar2.innerHTML = `$${(item * 4).toFixed(2)}`
    pageview.innerHTML = `${(item * 25)}K PAGEVIEWS`
  }

  switcher.addEventListener("click", ()=>{
    if(switcher.checked){
        clicked(currentValue)
    }else{
      canceled(currentValue)
    }
    })






