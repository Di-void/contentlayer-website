import { FC, useState } from 'react'
import Link from 'next/link'
import { User } from '../User'
import { Button } from '../Button'
import { Card } from '../Card'

const content = {
  tweets: [
    {
      text: 'Having type-safe access to my content has been extremely helpful. Contentlayer provides a nice abstraction between your Markdown files or CMS and your application.',
      user: {
        name: 'Lee Robinson',
        position: 'Developer Relations at Vercel',
        avatar: 'https://pbs.twimg.com/profile_images/1194080814688079872/6qhYKGKC_400x400.jpg',
      },
      url: '/',
    },
    {
      text: 'I’m using Contentlayer on my own website and it just works. No going back. Finally it’s easy to use content in my apps.',
      user: {
        name: 'Pedro Duarte',
        position: 'Creator of Radix UI',
        avatar: 'https://avatars.githubusercontent.com/u/372831?v=4',
      },
      url: '/',
    },
    {
      text: 'I’m not using Contentlayer yet but I’m sure it’s great. Very excited about it in any case.',
      user: {
        name: 'Brian Lovin',
        position: 'Staff Designer at GitHub',
        avatar: 'https://pbs.twimg.com/profile_images/1217652661962661888/WfiUNjzP_400x400.jpg',
      },
      url: '/',
    },
    {
      text: 'I’m using Contentlayer on my own website and it just works. No going back.',
      user: {
        name: 'Johannes Schickling',
        position: 'Founder of Prisma',
        avatar: 'https://pbs.twimg.com/profile_images/1452580365156208644/MSsWd3oT_400x400.jpg',
      },
      url: '/',
    },
  ],
}

const Tweet: FC<{ text: string; user: { name: string; position: string; avatar: string }; url: string }> = ({
  text,
  user,
  url,
}) => {
  return (
    <Link href={url}>
      <a className="block h-full" rel="noreferrer" target="_blank">
        <Card className="h-full space-y-4 p-8">
          <User {...user} />
          <p className="font-light italic text-slate-500 dark:text-slate-400">
            <q>{text}</q>
          </p>
        </Card>
      </a>
    </Link>
  )
}

export const Tweets: FC = () => {
  const [tweetsToShow, setTweetsToShow] = useState<number>(2)
  return (
    <div className="relative my-16 w-full overflow-x-hidden md:my-24 lg:my-32">
      <ul className="md:animate-scroll m-0 hidden list-none space-y-8 md:flex md:space-y-0">
        {[...content.tweets, ...content.tweets, ...content.tweets].map((tweet, index) => (
          <li
            key={index}
            className={`m-0 shrink-0 grow-0 px-4 md:w-[560px] ${
              index >= content.tweets.length ? 'hidden md:block' : 'block'
            }`}
          >
            <Tweet {...tweet} />
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        <ul className="md:animate-scroll m-0 list-none space-y-8 md:space-y-0">
          {content.tweets.slice(0, tweetsToShow).map((tweet, index) => (
            <li
              key={index}
              className={`shrink-0 grow-0 px-4 md:w-[560px] ${
                index >= content.tweets.length ? 'hidden md:block' : 'block'
              }`}
            >
              <Tweet {...tweet} />
            </li>
          ))}
        </ul>
        {tweetsToShow < content.tweets.length && (
          <div className="flex w-full justify-center px-4 pt-8">
            <Button label="Show more" action={() => setTweetsToShow(tweetsToShow + 2)} theme="primary" />
          </div>
        )}
      </div>
    </div>
  )
}
