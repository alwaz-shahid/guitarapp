import React from 'react'

export default function chordsPage() {
  return (
    <div className="w-full min-h-screen p-5">
      <section
        className="p-5 min-h-screen bg-green-300
      "
      >
        <div className="flex flex-wrap justify-start items-start p-5">
          <MyChord />
        </div>
        <ChordTransposer />
        {/* <MyChord /> */}
        <br />
        {/* <ChordDiagram chord={chordObject} /> */}
      </section>
    </div>
  )
}
