type MenuItem = {
  path: string;
  name: string;
};

type Destination = {
  name: string;
  image: string;
  description: string;
  distance: string;
  time: string;
};

type Person = {
  name: string;
  position: string;
  description: string;
  image: string;
};

type Rocket = {
  name: string;
  description: string;
  images: {
    portrait: string;
    landscape: string;
  };
};
