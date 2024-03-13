let truckCapacity = 5000
let numberOFBookings = 0
let toatalNumberOfCity = 11
const phase1 = document.querySelector('.phase-1')
const phase2 = document.querySelector('.phase-2')
const phase3 = document.querySelector('.phase-3')
const phase4 = document.querySelector('.phase-4')
const phase5 = document.querySelector('.phase-5')
var bookings = []
phase1.querySelector('.submit-button').addEventListener('click', () => {
  truckCapacity = phase1.querySelector('input').value
  phase1.classList.add('d-none')
  phase2.classList.remove('d-none')
  console.log(truckCapacity)
  document.querySelector('.capacity-truck-total').innerHTML = `Truck Capacity: ${truckCapacity} KG`
})
phase2.querySelectorAll('.submit-button').forEach(function (button) {
  button.addEventListener('click', function () {
    const numberOFBookings = parseInt(button.getAttribute('data-value'))
    console.log(numberOFBookings)
    phase2.classList.add('d-none')
    phase3.classList.remove('d-none')
    phase3.querySelector(`.booking${numberOFBookings}`).classList.remove('d-none')
    if (numberOFBookings === 0) {
      document.querySelector('.total-fare-decided').classList.add('fareDecided')
    } else if (numberOFBookings === 1) {
      let startElement = 0
      let endElement = 0
      let reverseFair = 0
      if (startElement === 0 || endElement === 0) {
        var locationDivs = document.querySelectorAll('.booking1 .location div')
        locationDivs.forEach(function (div) {
          console.log(startElement, endElement)
          div.addEventListener('click', function () {
            if (startElement !== 0 && endElement !== 0) {
            } else {
              var clickedValue = this.textContent
              console.log('click= ', clickedValue)
              if (startElement == 0) {
                startElement = clickedValue
                div.classList.add('red')
                locationDivs.forEach(function (div) {
                  if (div.textContent > startElement) {
                    div.classList.add('cannot-choose-this-city')
                  }
                })
              } else if (clickedValue < startElement) {
                endElement = clickedValue
                div.classList.add('green')
                let reverseFairDiv = document.querySelector('.booking1 .reverse-fair')
                reverseFairDiv.innerHTML = `Calculating Fair from City <span class='red'>${startElement}</span> to  <span class='green'>${endElement}</span> </br>  <div class="loader"></div>`
                setTimeout(() => {
                  phase3.classList.add('d-none')
                  phase4.classList.remove('d-none')
                  let = phase4Booking1 = phase4.querySelector('.booking1')
                  phase4Booking1.classList.remove('d-none')
                  const distanceBwTwoCity = startElement.charCodeAt(0) - 64 - (endElement.charCodeAt(0) - 64)
                  phase4Booking1.innerHTML = ` <div class="location">
                                    <div>A</div>
                                    <div>B</div>
                                    <div>C</div>
                                    <div>D</div>
                                    <div>E</div>
                                    <div>F</div>
                                    <div>G</div>
                                    <div>H</div>
                                    <div>I</div>
                                    <div>J</div>
                                    <div>K</div>
                                 </div><span>Using Google Map, Calculated Distance Between City <span class='red border-r50'>${startElement}</span> to  <span class='green border-r50'>${endElement}</span> is  <span class='yellow'>${distanceBwTwoCity} KM</span></span><span>Total Fare from City <span class='red  border-r50'>${startElement}</span> to  <span class='green  border-r50'>${endElement}</span> is <span class="yellow" >Rs. ${100 * distanceBwTwoCity}</span?</span>`
                  finalCalculationCost(100 * distanceBwTwoCity)
                }, 5000)
              }
            }
          })
        })
      }
    } else {
      function addBooking(bookingNumber, startCity, endCity, cost, capacity) {
        console.log('addBoking callled')
        var booking = {
          bookingNumber: bookingNumber,
          startCity: startCity,
          endCity: endCity,
          cost: parseInt(cost),
          capacity: parseInt(capacity),
        }
        bookings.push(booking)
      }
      phase2.classList.add('d-none')
      phase3.classList.remove('d-none')
      const multiBookingDiv = phase3.querySelector('.booking2')
      multiBookingDiv.classList.remove('d-none')
      let totalNumberOfMultipleBookings = 0
      multiBookingDiv.querySelector('.multiple-booking-div .submit-button').addEventListener('click', () => {
        totalNumberOfMultipleBookings = multiBookingDiv.querySelector('input').value
        document.querySelector('body').style.overflowY = 'auto'
        document.querySelector('.custom-container').style.height = '100%'
        document.querySelector('.custom-container').style.marginTop = '120px'
        document.querySelector('.custom-container').style.marginBottom = '120px'
        addMultipleBookingLocations(totalNumberOfMultipleBookings - 1)
        multiBookingDiv.querySelector('.multiple-booking-div').classList.add('d-none')
        multiBookingDiv.querySelector('.multiple-booking-city-choose').classList.remove('d-none')
      })

      function addMultipleBookingLocations(k) {
        var cityChooseContainer = document.querySelector('.multiple-booking-city-choose')
        var locationTemplate = document.querySelector('.multiple-booking-location')
        for (var i = 0; i < k; i++) {
          var clone = locationTemplate.cloneNode(true) // true means deep clone including children
          var bookingNumberElement = clone.querySelector('div:first-child')
          if (bookingNumberElement) {
            bookingNumberElement.textContent = 'Booking - ' + (i + 2)
          }
          cityChooseContainer.appendChild(clone)
        }
        startChoosingCities()
      }
      function startChoosingCities() {
        var multipleBookingLocation = document.querySelectorAll('.multiple-booking-city-choose>div')
        console.log(multipleBookingLocation)
        for (let i = 0; i < multipleBookingLocation.length; ++i) {
          if (i != 0) {
            const locationDivs = multipleBookingLocation[i].querySelectorAll('.location div')
            let startElement = 0
            let endElement = 0
            locationDivs.forEach(function (div) {
              console.log(div)
              div.addEventListener('click', (e) => {
                e.preventDefault()
                if (startElement !== 0 && endElement !== 0) {
                } else {
                  var clickedValue = div.textContent
                  console.log('click= ', clickedValue)
                  if (startElement === 0) {
                    startElement = clickedValue
                    div.classList.add('red')
                    locationDivs.forEach(function (div) {
                      if (div.textContent > startElement) {
                        div.classList.add('cannot-choose-this-city')
                      }
                    })
                  } else if (clickedValue < startElement) {
                    endElement = clickedValue

                    div.classList.add('green')
                    locationDivs.forEach(function (div) {
                      div.classList.add('cursor-no')
                    })
                    multipleBookingLocation[i].querySelector('.loader').classList.remove('d-none')
                    const distanceBwTwoCity = startElement.charCodeAt(0) - 64 - (endElement.charCodeAt(0) - 64)
                    multipleBookingLocation[i].querySelector('.choosen-location').innerHTML = `City <span class='red border-r50'>${startElement}</span> to  <span class='green border-r50'>${endElement}</span>`
                    multipleBookingLocation[i].querySelector('.price-for-this-distance').innerHTML = `Rs. ${100 * distanceBwTwoCity}`
                    let thisCapacity = 0
                    document.querySelector('.multiple-booking-capacity-container .city-between').innerHTML = `Capacity of Load from city <span class='red border-r50'>${startElement}</span> to city <span class='green border-r50'>${endElement}</span> `
                    let k = 0
                    // setTimeout(() => {
                    k = 1
                    document.querySelector('.multiple-booking-capacity-container').classList.remove('d-none')
                    console.log(multipleBookingLocation[i].querySelector('.choosen-capacity').innerHTML)
                    document.querySelector('.multiple-booking-capacity-container .submit-button').addEventListener('click', (e) => {
                      e.preventDefault()
                      thisCapacity = document.querySelector('.multiple-booking-capacity-container input').value
                      if (thisCapacity && k) {
                        k = 0
                        addBooking(i, startElement, endElement, distanceBwTwoCity * 100, thisCapacity)
                        console.log(multipleBookingLocation[i], thisCapacity)
                        multipleBookingLocation[i].querySelector('.choosen-capacity').innerHTML = `${thisCapacity} KG`
                        document.querySelector('.multiple-booking-capacity-container').classList.add('d-none')
                      }

                      // setTimeout(() => {
                      multipleBookingLocation[i].querySelector('.loader').classList.add('d-none')
                      multipleBookingLocation[i].querySelector('.choosen-location').classList.remove('d-none')
                      multipleBookingLocation[i].querySelector('.choosen-capacity').classList.remove('d-none')
                      multipleBookingLocation[i].querySelector('.price-for-this-distance').classList.remove('d-none')
                      // }, 1000)
                    })
                    if (i === multipleBookingLocation.length - 1) {
                      var lastDivElement = multipleBookingLocation[multipleBookingLocation.length - 1]
                      var submitButton = document.createElement('div')
                      submitButton.className = 'submit-button final-submit'
                      submitButton.textContent = 'Submit'
                      document.querySelector('.multiple-booking-city-choose').appendChild(submitButton)
                      document.querySelector('.multiple-booking-city-choose .final-submit').addEventListener('click', (e) => {
                        e.preventDefault()
                        phase3.classList.add('d-none')
                        phase4.classList.remove('d-none')
                        phase4.querySelector('.booking2').classList.remove('d-none')
                        startOptimizingCostForMultipleBookings()
                      })
                    }
                    // }, 0)
                  }
                }
              })
            })
          }
        }

        function startOptimizingCostForMultipleBookings() {
          let ans = []
          bookings.sort((a, b) => {
            if (a.startCity < b.startCity) return 1
            if (a.startCity > b.startCity) return -1
            return 0
          })

          const maxCapacity = parseInt(truckCapacity)
          let unloadVector = new Array(11).fill(0)
          let memo = []

          let bookingChoosed = []
          for (let i = 0; i < bookings.length; ++i) {
            console.log(bookings[i])
            bookingChoosed.push(false)
          }

          function knapsackMaximizeCost(bookings, currentIndex, currentCapacity, maxCapacity, unloadVector, bookingChoosed, ans) {
            if (currentIndex >= bookings.length) {
              //If we checked all the booking and now we are crossing last index
              ans.push([...bookingChoosed]) //Accepting all Bookings which follow constraints and pushing in ans vector
              return 0
            }

            //Lets take the current Booking
            let Take = 0
            let vectorCurrentIdx = parseInt(bookings[currentIndex].startCity.charCodeAt(0) - 65)
            let unloadedSum = 0
            for (let i = vectorCurrentIdx; i < 11; ++i) {
              unloadedSum += unloadVector[i] // if we are taking kth booking let's calculate how many times we have unloaded
            }
            // Current Capacity of Load in Truck = currentCapacity - unloadedSum
            if (currentCapacity - unloadedSum + bookings[currentIndex].capacity <= maxCapacity) {
              // checking the second constraint
              unloadVector[parseInt(bookings[currentIndex].endCity.charCodeAt(0) - 65)] += bookings[currentIndex].capacity
              bookingChoosed[currentIndex] = true // Kth booking is choosen
              Take = bookings[currentIndex].cost + knapsackMaximizeCost(bookings, currentIndex + 1, currentCapacity + bookings[currentIndex].capacity, maxCapacity, unloadVector, bookingChoosed, ans)
              bookingChoosed[currentIndex] = false // Kth Booking is not chosen
              unloadVector[parseInt(bookings[currentIndex].endCity.charCodeAt(0) - 65)] -= bookings[currentIndex].capacity // if we don't choose Kth booking then no need to add on unload vector
            }
            let notTake = knapsackMaximizeCost(bookings, currentIndex + 1, currentCapacity, maxCapacity, unloadVector, bookingChoosed, ans)
            return Math.max(Take, notTake) // Took that values which will give max cost addition to final answer
          }
          const maxCost = knapsackMaximizeCost(bookings, 0, 0, maxCapacity, unloadVector, bookingChoosed, ans)

          console.log('Maximum Cost:', maxCost)
          console.log('Bookings Chosen:', ans)
          for (let i = 0; i < ans.length; ++i) {
            let cost = 0
            for (let j = 0; j < ans[i].length; ++j) {
              console.log(ans[i][j])
              if (ans[i][j]) {
                cost += bookings[j].cost
              }
            }
            if (cost === maxCost) {
              let booking2 = phase5.querySelector('.booking2')
              let notBooking2 = phase5.querySelector('.not-booking2')
              booking2.innerHTML = `
                    <div>The Following Bookings are chosen</div>
                `
              let gg = 1
              notBooking2.innerHTML = `
                <div>The Following Bookings are not chosen</div>
            `
              for (let k = 0; k < ans[i].length; ++k) {
                if (ans[i][k]) {
                  console.log('chosen= ', bookings[k])
                  let div = document.createElement('div')
                  div.innerHTML = `<span>Booking-${bookings[k].bookingNumber}</span> city <span class='red border-r50'> ${bookings[k].startCity}</span> to city <span class='green border-r50'>${bookings[k].endCity}</span> <span> ${bookings[k].capacity} KG</span> <span>Rs. ${bookings[k].cost}</span>`
                  booking2.appendChild(div)
                } else {
                  console.log('Notchosen= ', bookings[k])
                  gg = 0
                  let div = document.createElement('div')
                  div.innerHTML = `<span>Booking-${bookings[k].bookingNumber}</span> city <span class='red border-r50'> ${bookings[k].startCity}</span> to city <span class='green border-r50'>${bookings[k].endCity}</span> <span> ${bookings[k].capacity} KG</span> <span>Rs. ${bookings[k].cost}</span>`
                  notBooking2.appendChild(div)
                }
              }
              if (gg) {
                notBooking2.innerHTML = ` `
              }
              break
            }
          }

          setTimeout(() => {
            document.querySelector('body').overflowY = 'hidden'
            phase4.classList.add('d-none')
            phase5.classList.remove('d-none')
            finalCalculationCost(maxCost)
          }, 1000)
        }
      }
    }
  })
})
function finalCalculationCost(maxCost) {
  const costDisplay = document.querySelector('.a-to-k-cost')

  const decreaseAmount = 10
  const decreaseInterval = 250
  const actualPrice = parseInt(costDisplay.textContent)
  const targetValue = actualPrice - maxCost

  function decreaseValue() {
    let currentValue = parseInt(costDisplay.textContent)

    if (currentValue > targetValue) {
      currentValue -= decreaseAmount
      costDisplay.textContent = currentValue

      setTimeout(decreaseValue, decreaseInterval)
    } else {
      document.querySelector('.a-to-k-cost').classList.add('fareDecided')
      document.querySelector('.actual-price-cut').classList.remove('d-none')
      document.querySelector('.discount-got').classList.remove('d-none')
      document.querySelector('.discount-got').innerHTML = `You got discount of Rs. ${actualPrice - targetValue}`
      document.querySelector('.discount-got').classList.add('translate')
      setTimeout(() => {
        document.querySelector('.discount-got').classList.add('d-none')
      }, 1500)
    }
    if (parseInt(costDisplay.textContent) < (actualPrice * 2) / 3) {
      document.querySelector('.total-fare-decided').classList.add('green')
    } else {
      document.querySelector('.total-fare-decided').classList.add('yellow')
    }
  }
  decreaseValue()
}
