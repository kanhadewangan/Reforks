import React from 'react'
import Markquee from './Markquee'

const Markee = () => {
  const image =[
    [
      "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2017/png/iconmonstr-spotify-1.png&r=0&g=0&b=0",
      "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2017/png/iconmonstr-spotify-1.png&r=0&g=0&b=0",
      "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2017/png/iconmonstr-spotify-1.png&r=0&g=0&b=0",
      "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2017/png/iconmonstr-spotify-1.png&r=0&g=0&b=0",
      "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2017/png/iconmonstr-spotify-1.png&r=0&g=0&b=0",
      "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2017/png/iconmonstr-spotify-1.png&r=0&g=0&b=0",



    ],
    
    [
      "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2017/png/iconmonstr-spotify-1.png&r=0&g=0&b=0",
      "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2017/png/iconmonstr-spotify-1.png&r=0&g=0&b=0",
      "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2017/png/iconmonstr-spotify-1.png&r=0&g=0&b=0",
      "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2017/png/iconmonstr-spotify-1.png&r=0&g=0&b=0",
      "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2017/png/iconmonstr-spotify-1.png&r=0&g=0&b=0",
      "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2017/png/iconmonstr-spotify-1.png&r=0&g=0&b=0",


    ]
  ]
  return (
    <div>

      {image.map(itm=> <Markquee imgUrl={itm} />,
      console.log(itm)
      
    )
      
      }
    </div>
  )
}

export default Markee
