import { Fragment } from 'react'
import Link from 'next/link'

const BodyHighlights = ({ body }: {body: string}) => {
  const strArr = body.split(/(\{%[^%]*?%\}|\[\[.*?\|.*?\]\])/g),
    regex = /\{%|%\}/g,
    linkContentRegex = /^\[\[(.*?)\|(.*?)\]\]$/;

  
  return (
    <>
      {strArr.map((str, i) => {
        const isHighlight = str.startsWith('{%') && str.endsWith('%}');
        const isLink = str.startsWith('[[') && str.endsWith(']]');
        if (isHighlight) {
          const highlightedText = str.replace(regex, '').trim();
          return (
            <span key={i} className="text-teal-300 font-medium">
              {highlightedText}
            </span>
          )
        } else if (isLink) {
          const match = str.match(linkContentRegex);
          if (match && match[1] && match[2]) {
            const linkText = match[1].trim();
            const url = match[2];
            return (
              <Link className="text-[#905ebd] hover:text-teal-300 transition-all ease-in-out duration-500 font-medium" key={i} href={url}>{linkText}</Link>
            )
          }
          return <Fragment key={i}>{str}</Fragment>;
        } else {
          return <Fragment key={i}>{str}</Fragment>
        }
      })}
    </>
  )
}

export default BodyHighlights