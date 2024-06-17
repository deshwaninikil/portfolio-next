"use client"
import  { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from "tsparticles-slim";

type Engine = any
function Par() {

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    
  return (
    <div>
      <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                "particles": {
                  "number": {
                    "value": 21,
                    "density": {
                      "enable": false,
                      "value_area": 320.6824121731046
                    }
                  },
                  "color": {
                    "value": "#a7a7a7"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#000"
                    },
                    "polygon": {
                      "nb_sides": 12
                    },
                    "image": {
                      "src": "img/github.svg",
                      "width": 100,
                      "height": 100
                    }
                  },
                  "opacity": {
                    "value": 0.01,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 2,
                    "random": true,
                    "anim": {
                      "enable": true,
                      "speed": 10,
                      "size_min": 40,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": false,
                    "distance": 144.30708547789706,
                    "color": "#ffffff",
                    "opacity": 0.7696377892154509,
                    "width": 0.8017060304327615
                  },
                  "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": false,
                      "mode": "repulse"
                    },
                    "onclick": {
                      "enable": false,
                      "mode": "repulse"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 400,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 182.70698671517212,
                      "size": 113.68434728944044,
                      "duration": 2,
                      "opacity": 1,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              }}
        />
    </div>
  )
}

export default Par






        
     

 
