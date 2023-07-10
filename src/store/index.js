import { proxy } from 'valtio'

const store = proxy({
  intro: true, // are we on the homepage or not?
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
})

export default store
