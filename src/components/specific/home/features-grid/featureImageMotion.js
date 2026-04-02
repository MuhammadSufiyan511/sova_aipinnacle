export const featureImageAnimations = [
  { y: [0, -8, 0], rotate: [0, -1.2, 0], scale: [1, 1.02, 1] },
  { y: [0, -10, 0], rotate: [0, 1.6, 0], scale: [1, 1.03, 1] },
  { y: [0, -9, 0], rotate: [0, -1, 0], scale: [1, 1.015, 1] },
  { y: [0, -7, 0], rotate: [0, 1.2, 0], scale: [1, 1.02, 1] },
  { y: [0, -8, 0], rotate: [0, -1.5, 0], scale: [1, 1.025, 1] },
  { y: [0, -9, 0], rotate: [0, 1.4, 0], scale: [1, 1.025, 1] },
]

export const featureImageTransition = (duration, delay = 0) => ({
  duration,
  delay,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
})
