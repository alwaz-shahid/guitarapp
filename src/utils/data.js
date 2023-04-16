const posts = [
  {
    id: 1,
    title: "Post 1",
    category: "Category 1",
    slug: "post-1",
    date: "2020-01-01",
    body: `Transposing keys is easiest if you learn how to decipher chord functions in each key. Knowing each key is critical. For example: in F major

        F major - tonic (I)
        G minor - supertonic (ii)
        A minor - mediant (iii)
        Bb Major - subdominant (IV)
        C Major - dominant (V)
        D minor - submediant (vi)
        E diminished - leading tone (vii dim)
        
        Then, if your progression is I-IV-V-I, you could transpose to the key of Bb (add one flat). Your progression would be BbM, EbM, FM, BbM.
        
        Also, if you are transposing up or down a 5th (for example), you are counting scale steps. Therefore your tonic pitch is step 1. If you want to transpose up a 5th from D, you would count D, E, F#, G, A. There it is. Hope it is helpful!"
    `,
  },
    {
    id: 2,
    title: "Post 2",
    category: "Category 2",
    slug: "post-2",
    date: "2020-01-02",
    body:`I have an Excel spreadsheet for the natrual major and minor scales (I have an Excel spreadsheet for just about everything  ), but unfortunately I can't post it as an attachment, and it's too large to turn into a .jpg. It's not going to line up, but you can write it out to line up or enter it into Excel cells to line up. To transpose, it's just a matter of substituting the chords in one key for the other.

    Natural Major Scales
    I ii ii IV V vi vii
    Maj m m Maj Maj m Dim.
    C D E F G A B
    G A B C D E F#
    D E F# G A B C#
    A B C# D E F# G#
    E F# G# A B C# D#
    B C# D# E F# G# A#
    F# G# A# B C# D# E#
    F G A Bb C D E
    Bb C D Eb F G A
    Eb F G Ab Bb C D
    Ab Bb C Db Eb F G
    Db Eb F Gb Ab Bb C
    
    Relative Natural Minor Scales
    i ii III iv v VI VII
    m Dim. Maj m m Maj Maj
    A B C D E F G
    E F# G A B C D
    B C# D E F# G A
    F# G# A B C# D E
    C# D# E F# G# A B
    G# A# B C# D# E F#
    D# E# F# G# A# B C#
    D E F G A Bb C
    G A Bb C D Eb F
    C D Eb F G Ab Bb
    F G Ab Bb C Db Eb
    Bb C Db Eb F Gb Ab`
    },
    
];
 export default posts;