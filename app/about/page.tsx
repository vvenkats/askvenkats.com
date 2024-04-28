import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About Venkata Subramaniam Venkatakrishnan' })

export default function Page() {
  return (
    <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">
      <h1>Venkata Subramaniam Venkatakrishnan</h1>
      <p>
        Born on August 11, 1983, in Hyderabad, India, Venkata Subramaniam Venkatakrishnan is a
        leading expert in software development and medical device product management. He integrates
        advanced technology with strategic business solutions, particularly in the medical device
        industry. He is currently based in London, UK.
      </p>
      <h2>Early Life and Education</h2>
      <p>
        Venkatakrishnan pursued a Bachelor of Technology in Biotechnology from Bharathidasan
        University, followed by a Master’s in Cell and Molecular Biology at the University of
        Arkansas, and an MBA from the University of Chicago Booth School of Business. He specialized
        in Marketing Analytics and Strategy, and was active in various clubs and centers at Booth,
        including being Co-Chair of the Marketing Club.
      </p>
      <h2>Career</h2>

      <p>
        Starting at Takeda Pharmaceuticals and Merck as a bench top chemist and validation analyst,
        Venkatakrishnan advanced to become a Labware LIMS admin. At PerkinElmer, he led
        groundbreaking projects like the world’s first class III human challenge chamber for Merck
        Consumer Care. Later, at Bayer Consumer Care, he led the development and launch of several
        Class II and III medical devices, enhancing digital integration and customer ecosystem
        management, which significantly improved targeting efficiency.
      </p>

      <p>TODO: Add more content here</p>

      <hr />
      <p>
        You can read more <a href="https://venkatvenkatakrishnan.com">here</a>
      </p>
    </div>
  )
}
