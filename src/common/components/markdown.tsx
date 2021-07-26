import { memo } from "react";
import ReactMarkdown from "react-markdown";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { Theme } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";

interface IMarkdownProps {
  children: string;
}

const useStyles = makeStyles<Theme>((theme) => ({
  link: {
    color: teal["500"],
  },
  list: {
    fontSize: 13,
  },
  quote: {
    fontStyle: "italic",
  },
}));

export const Markdown = memo(({ children }: IMarkdownProps) => {
  /* Vars */

  const classes = useStyles();

  /* Render */

  return (
    <ReactMarkdown
      components={{
        em: ({ children, ...props }) => <strong {...props}>{children}</strong>,
        a: ({ href, children, className, ...props }) => {
          return (
            <a
              href={href as string}
              target="_blank"
              rel="noreferrer"
              className={clsx(className, classes.link)}
              {...props}
            >
              {children}
            </a>
          );
        },
        ul: ({ children, ...props }) => {
          return (
            <ul className={classes.list} {...props}>
              {children}
            </ul>
          );
        },
        blockquote: ({ children, ...props }) => {
          console.log({ props });
          return <blockquote className={classes.quote}>{children}</blockquote>;
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
});
