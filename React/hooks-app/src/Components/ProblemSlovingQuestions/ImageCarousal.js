import React, { useEffect, useState } from 'react'

export default function ImageCarousal() {
  const data = [{ id: 1, url: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 2, url: "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 3, url: "https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }]

  const [activeIndex, setActiveIndex] = useState(0)
  const handleNext = () => {
    if (activeIndex === data.length - 1) {
      setActiveIndex(0)
    } else {
      setActiveIndex((prev) => prev + 1)
    }

  }
  const handlePrevious = () => {
    if (activeIndex === 0) {
      setActiveIndex(data.length - 1)
    } else {
      setActiveIndex((prev) => prev - 1)
    }

  }

  useEffect(() => {
    let timer = setTimeout(() => {
      handleNext()
    }, 2000)
    return () => {
      clearInterval(timer)
    }
  }, [activeIndex])
  return (
    <div>
      <img src={data[activeIndex].url} alt="" height="300px" width="300px" />
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrevious}>Previous</button>
    </div>
  )
}
