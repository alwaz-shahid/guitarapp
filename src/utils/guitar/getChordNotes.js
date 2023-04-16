function getChordNotes(key, notes, sharps) {
  const index = notes.indexOf(key)
  const sharpsIndex = sharps.indexOf(key)

  const major = [
    notes[index],
    `${notes[(index + 2) % 12]}m`,
    `${notes[(index + 4) % 12]}m`,
    notes[(index + 5) % 12],
    notes[(index + 7) % 12],
    `${notes[(index + 9) % 12]}m`,
    `${notes[(index + 11) % 12]}dim`,
  ]

  const minor = [
    `${notes[(index + 9) % 12]}m`,
    `${notes[(index + 11) % 12]}dim`,
    notes[index],
    `${notes[(index + 2) % 12]}m`,
    notes[(index + 4) % 12],
    `${notes[(index + 5) % 12]}m`,
    `${notes[(index + 7) % 12]}`,
  ]

  if (sharpsIndex !== -1) {
    major[3] = `${sharps[sharpsIndex]}#`
    minor[2] = `${sharps[sharpsIndex]}m`
    minor[5] = `${sharps[(sharpsIndex + 1) % 5]}m`
    minor[6] = `${sharps[(sharpsIndex + 2) % 5]}`
  }

  return { major, minor }
}
