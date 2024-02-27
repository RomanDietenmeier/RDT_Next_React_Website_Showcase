export const enum NavbarRoutes {
  Home = "start",
  About = "about",
  Services = "services",
  Team = "team",
  Contact = "contact",
}

export const enum NavbarRouteLinks {
  Home = `./#${NavbarRoutes.Home}`,
  About = `./#${NavbarRoutes.About}`,
  Services = `./#${NavbarRoutes.Services}`,
  Team = `./#${NavbarRoutes.Team}`,
  Contact = `./#${NavbarRoutes.Contact}`,
}
