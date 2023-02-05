import React from 'react'
import { Link } from 'react-router-dom'
import { FiExternalLink } from 'react-icons/fi'
function About() {
  return (
    <div className="container">
      <h1>About</h1>
      <p>
        This project is an attempt to allow readers of <Link to="https://wanderinginn.com/">The Wandering Inn<FiExternalLink/></Link>&nbsp;
        web serial to view interesting statistics regarding the progression
        of <strong>[Classes]</strong> , <strong>[Skills]</strong> , characters,
        spells, and so on.
      </p>
      <p>
        It is also my hope, that users will be able to assist in identifying and
        classifying characters, new skills, spells, and classes as the story unfolds.
        Afterall, this really is a massive series, and creating a truly comprehensive
        index is truly beyond one person. In the spirit of openness, if you've found this
        application useful, please consider contributing to the&nbsp;
        <Link to="https://github.com/cblanken/wandering-inn-react">repository<FiExternalLink/></Link> or
        submitting an <Link to="https://github.com/cblanken/wandering-inn-react/issues">issue<FiExternalLink/></Link>&nbsp;
        if you've found any information here to be inaccurate or any other errors.
      </p>

      <p>
        Please note that this application is <em>not</em> officially endorsed by pirateaba
        or The Wandering Inn. If you enjoy the web serial, I encourage you to subscribe to
        pirateba's <Link to="https://www.patreon.com/pirateaba">Patreon<FiExternalLink/></Link>.
      </p>
    </div>
  )
}

export default About