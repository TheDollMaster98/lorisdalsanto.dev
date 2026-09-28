export type Link = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  email: string;
  links: Link[];
};
