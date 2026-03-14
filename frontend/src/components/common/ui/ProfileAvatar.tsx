import Link from 'next/link';

type ProfileAvatarProps = {
  initials: string;
  href?: string;
  className?: string;
};

export function ProfileAvatar({ initials, href = '/profile', className }: ProfileAvatarProps) {
  return (
    <Link href={href} className={className}>
      {initials}
    </Link>
  );
}
