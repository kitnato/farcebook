# Farcebook

![Farcebook screenshot](/farcebook-screenshot-v1.0.0.png?raw=true)

_Like yourself into oblivion._

A simple browser-based [idle/incremental](https://en.wikipedia.org/wiki/Incremental_game) game.

A personal side-project, a proof-of-concept of a Typescript browser-based game. The goal is to utilize a functional programming approach with [React hooks](https://reactjs.org/docs/hooks-intro.html) and [atomic state](https://recoiljs.org/docs/introduction/core-concepts) management via the browser's own [native frame buffer](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) rather than the classical game architecture involving classes, timers and a centralized "game loop".

## Set up

To run the app locally, you will need a command-line interface (CLI) on any operating system, as well as [git](https://git-scm.com/downloads) and [NPM](https://docs.npmjs.com/cli/v8/configuring-npm/install) installed globally.

1. Open the CLI and change into a suitable directory (e.g. "My Documents" folder)
1. Run `git clone git@github.com:cneuro/farcebook.git`
1. Run `cd farcebook`
1. Run `npm install`
1. Run `npm start`
1. Open [http://localhost:5173](http://localhost:5173) in a web browser.

### Local development

Before committing any changes, please do the following:

1. In the CLI, go to the project folder (e.g. `cd farcebook`).
1. Run `npm run prepare`

Now on every commit all the relevant linters & formatters will apply any changes automatically according to best practices.

The linter config can be viewed in `.eslintrc.json` and `.prettierc.json`.

## How to play

Click the big blue thumbs-up button to gain a Like.

As Likes are gained, more gameplay elements become available.

### Likes

Likes are the main currency and amassing them is the ultimate objective. They are gained by clicking the Like button. With certain upgrades, they can also be gained automatically.

The number of Likes that can be gained depends on the number of Followers.

### Followers

Each new Follower increases the amount of Engagement generated when clicking the Like button as well as by Influencers later.

### Engagement

Engagement is generated with each click on the Like button. Later, Influencers also generate Engagement autonomously. Each time Engagement is generated, it also generates a certain quantity of Reach and a certain number of Likes.

### Reach

Every time Engagement is generated, Reach progress increases. That amount is later influenced by Virality rank.

If progress reaches its current maximum, a new Follower is gained, progress is reset to 0 and the maximum required Reach for the next Follower is increased. Reach decreases gradually with Attrition.

### Attrition

A percentage that determines the decay of Reach. It refers to what percent of the current Reach's maximum is lost per second. Once Reach reaches 0, a Follower is lost and progress is reset to the previous maximum. Without continual Engagement, Attrition continues until all Reach is lost and Followers become 0.

Attrition automatically increases gradually up to a maximum of 10%. Every time Engagement is generated, Attrition is decreased (by more than it can rise gradually) down to a minimum of 1%. Clicking the Like button disables Attrition increase by up to two seconds.

### Influencers

Once acquired, each Influencer automatically generates Engagement at a set time interval. Each extra Influencer increases the amount of Engagement generated autonomously.

### Dominance

Once all upgrades are unlocked, the red Dominance meter will show up, measuring total Likes. The farce ends when total social media dominance is achieved (1,000,000,000 Likes accumulated).

### Upgrades

All upgrades are unlocked as the required number of Likes are met. They can then be acquired at a price of Likes. Each time they are acquired, their rank is increased, and so does their price for the next rank.

#### Based

Each rank decreases the interval of Influencers generating Engagement. Maximum rank is reached when the interval is continuous (60 times a second).

#### Viral

Each rank increases the amount of Reach gained per Engagement.

#### Dank

Each rank increases the number of Followers gained whenever maximum Reach is attained.

#### Woke

Each rank increases all Engagement generation.

### Achievements

`TODO`

These are unlocked automatically when certain conditions are met. Each of the following achievement families has three tiers, each with progressively higher requirements.

Each unlocked achievement increases total Likes generation by 1%. If all tiers are completed inside a family, Likes generation is increased by a further 10%.

#### Based rank

- Tier 1:
- Tier 2:
- Tier 3:

#### Dank rank

- Tier 1:
- Tier 2:
- Tier 3:

#### Engagement total

- Tier 1:
- Tier 2:
- Tier 3:

#### Engagement per second

- Tier 1:
- Tier 2:
- Tier 3:

#### Follower count

- Tier 1:
- Tier 2:
- Tier 3:

#### Influencer count

- Tier 1:
- Tier 2:
- Tier 3:

#### Likes total

- Tier 1:
- Tier 2:
- Tier 3:

#### Likes per second

- Tier 1:
- Tier 2:
- Tier 3:

#### Reach count

- Tier 1:
- Tier 2:
- Tier 3:

#### Reach per second

- Tier 1:
- Tier 2:
- Tier 3:

#### Viral rank

- Tier 1:
- Tier 2:
- Tier 3:

#### Woke rank

- Tier 1:
- Tier 2:
- Tier 3:

### "Ascension"

`TODO`

Practically all idle/incremental games have a mechanic that allows resetting the game and starting over with certain permanent gameplay bonuses, thus allowing the player to work towards long-term meta goals.

Well, there is no such Ascension here! Not yet, at least.

## Roadmap

This project is still a work-in-progress and should be regarded more as a template for other games rather than a stand-alone achievement. Anything in this README with the "`TODO`" tag is still to be implemented.

Nevertheless, any contributions, suggestions and comments are very welcomed.

- `v1.0` [CURRENT] - Basic mechanics
- `v1.1` - Achievements
- `v1.2` - Ascension mechanic

## Implementation

- This project is bootstrapped with [Vite](https://vitejs.dev).

- Written in [TypeScript](https://www.typescriptlang.org/).

- The UI framework is provided by [Bootstrap](https://react-bootstrap.github.io).

- The app state management library is [Jotai](https://jotai.org).

- Linting & its automation provided by [eslint](https://eslint.org/) and [prettier](https://prettier.io/).

- Code style & linting automation is provided by [husky](https://typicode.github.io/husky/#/) and [lint-staged](https://www.npmjs.com/package/lint-staged).

- The [thumbs-up SVG icon](https://www.svgrepo.com/svg/352839/thumbs-up) is provided by FontAwesome under the CC Attribution License.

- The particle animation library is provided by [TypeScript Particles](https://github.com/matteobruni/tsparticles) and the endgame effect is shamelessly ripped off from [existing templates](https://particles.js.org/samples/presets/confetti.html).

## License

Farcebook &copy; 2022 is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
