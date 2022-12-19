[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/alexinabox/wol-hyper-v">
    <img src="assets/logo.png" alt="Logo" width="200" height="200">
  </a>

<h3 align="center">wol-hyper-v</h3>

  <p align="center">
    wake on host
    <br />
    <a href="https://github.com/alexinabox/wol-hyper-v/issues">Report Bug</a>
    ·
    <a href="https://github.com/alexinabox/wol-hyper-v/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#daemonize">Daemonize</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

wol-hyper-v is a node.js application starting a hyper-v VM on the host machine when receiving a http-get request. This request must include at least one key named 'action', with the value of either 'start' or 'stop'. <br>
Optionally the GET request can also include a key named 'vmname' with the value corrsiponding to the actual name of the Hyper-V VM on the host machine.

Example: <br>

On the host machine there is a Hyper-V VM setup named 'testvm1'. <br>

Therefore the GET request to start this VM should contain the following key's: <br>
```
'action' = 'start'
'vmname' = 'testvm1'
```	

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Express][Express.js]][Express-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Funny project. Easy to use!

### Prerequisites

This project requires NodeJS (version 8 or later) and NPM. Node and NPM are really easy to install. To make sure you have them available on your machine, try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

(your output should look something like this if and only if you have those tools installed. if not, consider installing them! duh)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/alexinabox/wol-hyper-v
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Edit the **config.js** file!  (dont copy the following as a whole since comments dont work in json syntax)

    ```json
    {
        "vmName": "testvm", <-- the name of your vm in hyper-v
        "port": 5986,       <-- your server will run on this port
        "verbose": true     <-- set this to true incase of any errors
    }
    ```

4. open the desired port on your firewall (optional) 

5. start the server (or turn this application into a <a href="#daemonize">windows backround service</a>!):
   ```sh
   node index.js
   ```

7. profit

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Daemonize

The daemonization of this application ensures that it always runs in the background and also starts itself on boot!

**Create** the windows backround service:
   ```sh
   cd misc/
   node createWinSvc.js
   ```

**Remove** the windows backround service:
   ```sh
   cd misc/
   node removeWinSvc.js
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Like you can have your health data inside discord webhooks now. wooho.

_For more examples, please refer to the **non existent** [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] lorem ipsum


See the [open issues](https://github.com/alexinabox/wol-hyper-v/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Bla Bla Bla learning bla bla bla open-source bla bla bla **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request (write something neat so i know whats goin on)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the GNU General Public License v3.0 License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

AlexInABox - [@wilder_Alex__](https://twitter.com/wilder_Alex__) - main@alexinabox.de

Project Link: [https://github.com/alexinabox/wol-hyper-v](https://github.com/alexinabox/wol-hyper-v)

Website: [https://alexinabox.de](https://alexinabox.de)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []() stackoverflow

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/alexinabox/wol-hyper-v.svg?style=for-the-badge
[contributors-url]: https://github.com/alexinabox/wol-hyper-v/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/alexinabox/wol-hyper-v.svg?style=for-the-badge
[forks-url]: https://github.com/alexinabox/wol-hyper-v/network/members
[stars-shield]: https://img.shields.io/github/stars/alexinabox/wol-hyper-v.svg?style=for-the-badge
[stars-url]: https://github.com/alexinabox/wol-hyper-v/stargazers
[issues-shield]: https://img.shields.io/github/issues/alexinabox/wol-hyper-v.svg?style=for-the-badge
[issues-url]: https://github.com/alexinabox/wol-hyper-v/issues
[license-shield]: https://img.shields.io/github/license/alexinabox/wol-hyper-v.svg?style=for-the-badge
[license-url]: https://github.com/alexinabox/wol-hyper-v/blob/master/LICENSE
[product-screenshot]: assets/showcase1.png
[Express.js]: https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=expressdotjs&logoColor=white
[Express-url]: https://expressjs.com