import { FC, useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { PostContext } from '@/components/PostsRow';
import { StyledAnchor } from '@/components/StyledLink';

const PostAuthorNames: FC<{ className?: string }> = ({ className }) => {
  const {
    _embedded: { author: authors },
  } = useContext(PostContext)!;

  return (
    <span className={className}>
      By{' '}
      {authors.map((author, index) => (
        <StyledAnchor key={author.id} href={`/authors/${author.slug}`}>
          {author.name}
          {index !== authors.length - 1 && ', '}
        </StyledAnchor>
      ))}
    </span>
  );
};

PostAuthorNames.defaultProps = {
  className: '',
};

export default PostAuthorNames;
