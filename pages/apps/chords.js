import React from 'react'
import MyChord from '../../components/guitar/MyChord'
import ChordTransposer from '../../components/guitar/ChordTransposer'
import Layout from '../../components/Layout'

export default function chordsPage() {
  return (
    <Layout>
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
    </Layout>
  )
}
