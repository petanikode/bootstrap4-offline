self.importScripts('/assets/js/vendor/workbox-sw.prod.v2.1.2.js')

const workboxSW = new self.WorkboxSW()
workboxSW.precache([
  {
    "url": "assets/brand/bootstrap-outline.svg",
    "revision": "9537646a9202cb5dca44e9034c1b414b"
  },
  {
    "url": "assets/brand/bootstrap-punchout.svg",
    "revision": "372e344ac243c4fa7c6c8b8a2af0e5ff"
  },
  {
    "url": "assets/brand/bootstrap-social-logo.png",
    "revision": "1e9e93d863b7811934889f9aac89c7de"
  },
  {
    "url": "assets/brand/bootstrap-social.png",
    "revision": "56be615bbca4502de5d55d721dae917f"
  },
  {
    "url": "assets/brand/bootstrap-solid.svg",
    "revision": "ea931a5b98a97e8b8658d9f6d537329e"
  },
  {
    "url": "assets/css/docs.min.css",
    "revision": "8d1a916512eacc66b2e196e001395a57"
  },
  {
    "url": "assets/img/bootstrap-stack.png",
    "revision": "7384412324c769e447d3c4f86e9ff068"
  },
  {
    "url": "assets/img/bootstrap-themes.png",
    "revision": "3976b58ff407451e8e8b598fdcde2cd2"
  },
  {
    "url": "assets/img/favicons/android-chrome-192x192.png",
    "revision": "643718426d0a7d60036217ba988155be"
  },
  {
    "url": "assets/img/favicons/android-chrome-512x512.png",
    "revision": "eb512e79165f504fd4da4d2758d5584b"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon.png",
    "revision": "042a7e9fdd293212aca19150aef71b0d"
  },
  {
    "url": "assets/img/favicons/favicon-16x16.png",
    "revision": "50c62448d4014e5fb411887c05c2935b"
  },
  {
    "url": "assets/img/favicons/favicon-32x32.png",
    "revision": "fed84e16b6ccfe88ee7ffaae5dfefd34"
  },
  {
    "url": "assets/img/favicons/manifest.json",
    "revision": "156fa02f06af421c0c018f37ece3cc75"
  },
  {
    "url": "assets/img/favicons/mstile-144x144.png",
    "revision": "84892991321e7998ca4c80ae21175f78"
  },
  {
    "url": "assets/img/favicons/mstile-150x150.png",
    "revision": "61821c45a353e259bb83f9b0d338f5e8"
  },
  {
    "url": "assets/img/favicons/mstile-310x150.png",
    "revision": "913e1b81006831c72a7bca38e4125edb"
  },
  {
    "url": "assets/img/favicons/mstile-310x310.png",
    "revision": "29d79a7e648876504496211f003c4076"
  },
  {
    "url": "assets/img/favicons/mstile-70x70.png",
    "revision": "386d71707992eb91fc53df303e99c2e7"
  },
  {
    "url": "assets/img/favicons/safari-pinned-tab.svg",
    "revision": "6b6b78894033fd91ce75affb548d8e67"
  },
  {
    "url": "assets/js/docs.min.js",
    "revision": "ac8702c660a236c2e9236eec0bcea6ed"
  },
  {
    "url": "assets/js/src/application.js",
    "revision": "c08f239f0942146feddd3f078fec831b"
  },
  {
    "url": "assets/js/src/ie-emulation-modes-warning.js",
    "revision": "fe80ecce8d355bac77f7bd95639ad04a"
  },
  {
    "url": "assets/js/src/pwa.js",
    "revision": "4de108c33799a18cec3362c52e333eff"
  },
  {
    "url": "assets/js/vendor/anchor.min.js",
    "revision": "01e6254e9f69c0c00f05060b0e1990fc"
  },
  {
    "url": "assets/js/vendor/clipboard.min.js",
    "revision": "3e5e0fa949e0e7c5ed5fed7b4cc0ee00"
  },
  {
    "url": "assets/js/vendor/holder.min.js",
    "revision": "6266d87979b32f717d298f7adf36984a"
  },
  {
    "url": "assets/js/vendor/jquery-slim.min.js",
    "revision": "99b0a83cf1b0b1e2cb16041520e87641"
  },
  {
    "url": "assets/js/vendor/popper.min.js",
    "revision": "70d3fda195602fe8b75e0097eed74dde"
  },
  {
    "url": "assets/js/vendor/workbox-sw.prod.v2.1.2.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "dist/css/bootstrap-grid.css",
    "revision": "f95501c020559de0a12a6a01c4879a07"
  },
  {
    "url": "dist/css/bootstrap-grid.min.css",
    "revision": "3bf268f154c3a9362b5b74ddf9b43803"
  },
  {
    "url": "dist/css/bootstrap-reboot.css",
    "revision": "97c0e8089028719904160874fa5540d1"
  },
  {
    "url": "dist/css/bootstrap-reboot.min.css",
    "revision": "4e559333725069a33a9d0f3387652ea5"
  },
  {
    "url": "dist/css/bootstrap.css",
    "revision": "7ea1d0a5443a17e30dec23458fde4821"
  },
  {
    "url": "dist/css/bootstrap.min.css",
    "revision": "603f0f91a95bc362c2aa1d11cac21005"
  },
  {
    "url": "dist/js/bootstrap.bundle.js",
    "revision": "200e64e649bef682cdf7858e5e9be433"
  },
  {
    "url": "dist/js/bootstrap.bundle.min.js",
    "revision": "a35e37d6cc0da7f43691e2d46492fc32"
  },
  {
    "url": "dist/js/bootstrap.js",
    "revision": "cef64dc0c9dd22dbec3d389f96136ad4"
  },
  {
    "url": "dist/js/bootstrap.min.js",
    "revision": "cc1182967fa81c147a82c7b5230fac68"
  },
  {
    "url": "docs/4.0/about/brand/index.html",
    "revision": "d6f95a6a1af5bb8ce6ef9203f0f776f2"
  },
  {
    "url": "docs/4.0/about/index.html",
    "revision": "6751d288b155a540a0a51e50377d9292"
  },
  {
    "url": "docs/4.0/about/license/index.html",
    "revision": "a7a6d4a45493a6e7b36b5f52dc5e3b64"
  },
  {
    "url": "docs/4.0/about/overview/index.html",
    "revision": "4f816c84d0eede3431d7f4e59bd2775e"
  },
  {
    "url": "docs/4.0/about/translations/index.html",
    "revision": "c795cc87fe6e06d62cb49f01b6d024d7"
  },
  {
    "url": "docs/4.0/browser-bugs/index.html",
    "revision": "35cc68e403373984c233ce0d1ac484ba"
  },
  {
    "url": "docs/4.0/components/alerts/index.html",
    "revision": "b2739b2e29b8139a2752757c7ce1ceab"
  },
  {
    "url": "docs/4.0/components/badge/index.html",
    "revision": "03c7ebbf360e61b029813124ccfb9436"
  },
  {
    "url": "docs/4.0/components/breadcrumb/index.html",
    "revision": "3bba268a98fd1df409cfae416ab53e9a"
  },
  {
    "url": "docs/4.0/components/button-group/index.html",
    "revision": "c73cd8ed2b6456329f95d5d54944f3a5"
  },
  {
    "url": "docs/4.0/components/buttons/index.html",
    "revision": "838f04b4cc67f9c79d8fa7f5f34ec318"
  },
  {
    "url": "docs/4.0/components/card/index.html",
    "revision": "074769ca9640ad5d6b22c09ce808664c"
  },
  {
    "url": "docs/4.0/components/carousel/index.html",
    "revision": "a70da33caa126d1569fec39a612b380d"
  },
  {
    "url": "docs/4.0/components/collapse/index.html",
    "revision": "58433665606c6418789e9a88f0a3c174"
  },
  {
    "url": "docs/4.0/components/dropdowns/index.html",
    "revision": "e6ed98bfef01cf6c18360f5ad0fc1fed"
  },
  {
    "url": "docs/4.0/components/forms/index.html",
    "revision": "79f6aeab29378cb55ca6dcb30362a721"
  },
  {
    "url": "docs/4.0/components/index.html",
    "revision": "2e628cfeb72ae5357e0db53008d55acf"
  },
  {
    "url": "docs/4.0/components/input-group/index.html",
    "revision": "dab741153a6d8ae5a8b731fb27ac3f6e"
  },
  {
    "url": "docs/4.0/components/jumbotron/index.html",
    "revision": "8eb65b7a79b39e118d8e117bfe575874"
  },
  {
    "url": "docs/4.0/components/list-group/index.html",
    "revision": "8950a87e3bf82cd1b403e80651409ad9"
  },
  {
    "url": "docs/4.0/components/modal/index.html",
    "revision": "63befaefca0f4b152a191d2eeb0c870f"
  },
  {
    "url": "docs/4.0/components/navbar/index.html",
    "revision": "9a85e7c876904d8a73f558c7e4623a5a"
  },
  {
    "url": "docs/4.0/components/navs/index.html",
    "revision": "e3ebd9f45cb2fbaeac3674c3c267ae34"
  },
  {
    "url": "docs/4.0/components/pagination/index.html",
    "revision": "1ea2ff766fe7e731ed494060eb98fea8"
  },
  {
    "url": "docs/4.0/components/popovers/index.html",
    "revision": "00029894e9783f8eb4239ac5211a578a"
  },
  {
    "url": "docs/4.0/components/progress/index.html",
    "revision": "48d0060bd0afb54a8ce38c0e677a18ea"
  },
  {
    "url": "docs/4.0/components/scrollspy/index.html",
    "revision": "579a2d87ba09061f9088f44899a9459e"
  },
  {
    "url": "docs/4.0/components/tooltips/index.html",
    "revision": "3bab4982dde2adb20c6ab7f21af0f16c"
  },
  {
    "url": "docs/4.0/content/code/index.html",
    "revision": "bbc5b9f4aec5e1668f9d58d24c0167b1"
  },
  {
    "url": "docs/4.0/content/figures/index.html",
    "revision": "541b39fa7a2750b4a37b7556e4f843a6"
  },
  {
    "url": "docs/4.0/content/images/index.html",
    "revision": "e11286b98a561d83b7cc2fcbd794703b"
  },
  {
    "url": "docs/4.0/content/index.html",
    "revision": "bc3647d359b11d0addab1691d9ef54fb"
  },
  {
    "url": "docs/4.0/content/reboot/index.html",
    "revision": "25b5d840da8c242ac66249621fc74dbe"
  },
  {
    "url": "docs/4.0/content/tables/index.html",
    "revision": "a17c81c3ad83be2e06b06f4968a90666"
  },
  {
    "url": "docs/4.0/content/typography/index.html",
    "revision": "709e9bedc5873102f05182c8059f19ed"
  },
  {
    "url": "docs/4.0/examples/album/album.css",
    "revision": "e8343131a0fefafe6ae0f37db6d10f3c"
  },
  {
    "url": "docs/4.0/examples/album/index.html",
    "revision": "8088e1d95bc9263681886821a80f5bcc"
  },
  {
    "url": "docs/4.0/examples/blog/blog.css",
    "revision": "cb98d3e8033940a716641516d2cb857b"
  },
  {
    "url": "docs/4.0/examples/blog/index.html",
    "revision": "c1d0cf090944a6369dcfeaeebbf73eff"
  },
  {
    "url": "docs/4.0/examples/carousel/carousel.css",
    "revision": "e1ef0ffa84cc98db13f90dd02b9981e7"
  },
  {
    "url": "docs/4.0/examples/carousel/index.html",
    "revision": "b60a1b9d8a622551914f1869d2070ca6"
  },
  {
    "url": "docs/4.0/examples/checkout/form-validation.css",
    "revision": "d13d35a0c04021ceacd8c153719860bc"
  },
  {
    "url": "docs/4.0/examples/checkout/index.html",
    "revision": "79021acecd4d9e2e84e26cf84153153b"
  },
  {
    "url": "docs/4.0/examples/cover/cover.css",
    "revision": "61f7cbbe930976e62264268abe51ebd3"
  },
  {
    "url": "docs/4.0/examples/cover/index.html",
    "revision": "f9fc2e9345ccfaded27c5060100ecd2b"
  },
  {
    "url": "docs/4.0/examples/dashboard/dashboard.css",
    "revision": "a04ae1b7ceba4aaeb3bc7fe3c72a6d40"
  },
  {
    "url": "docs/4.0/examples/dashboard/index.html",
    "revision": "b5747e593aa49f09d6807d00b4d87e00"
  },
  {
    "url": "docs/4.0/examples/floating-labels/floating-labels.css",
    "revision": "5a7fc5962d7981d2c5f9af28f785a0c5"
  },
  {
    "url": "docs/4.0/examples/floating-labels/index.html",
    "revision": "e16e25d95c2a41f6d3d8ff7b94b82936"
  },
  {
    "url": "docs/4.0/examples/grid/grid.css",
    "revision": "4cd2e5cc5e19dc692d50ed6f077154ef"
  },
  {
    "url": "docs/4.0/examples/grid/index.html",
    "revision": "1a634e4a3281204f8d46c5fdaea35a96"
  },
  {
    "url": "docs/4.0/examples/index.html",
    "revision": "69dc5c375aaf14cc4a71ae46082effd8"
  },
  {
    "url": "docs/4.0/examples/jumbotron/index.html",
    "revision": "187a48844da8e19e0765d417a5077f81"
  },
  {
    "url": "docs/4.0/examples/jumbotron/jumbotron.css",
    "revision": "0ef7edc6babea5a47645bda0c45368aa"
  },
  {
    "url": "docs/4.0/examples/navbar-bottom/index.html",
    "revision": "dd165c45857a4239ce7787aea5a7bff5"
  },
  {
    "url": "docs/4.0/examples/navbar-fixed/index.html",
    "revision": "1178a7c1f06eeeea76176173b2e0d7fd"
  },
  {
    "url": "docs/4.0/examples/navbar-fixed/navbar-top-fixed.css",
    "revision": "3d46ddff119cfe2886a34b72aefd42a6"
  },
  {
    "url": "docs/4.0/examples/navbar-static/index.html",
    "revision": "8f818f7c1ab4e90bf1ea9b0bd0adb5b3"
  },
  {
    "url": "docs/4.0/examples/navbar-static/navbar-top.css",
    "revision": "ae704085e05c4bc6a705b225b03a5aea"
  },
  {
    "url": "docs/4.0/examples/navbars/index.html",
    "revision": "08d8de3d5416b5d62729b6f02ef27ed2"
  },
  {
    "url": "docs/4.0/examples/navbars/navbar.css",
    "revision": "f95ea8bb033949bba31b05925773e223"
  },
  {
    "url": "docs/4.0/examples/offcanvas/index.html",
    "revision": "0c1f17f3f2369c39c7f4caf5e9245017"
  },
  {
    "url": "docs/4.0/examples/offcanvas/offcanvas.css",
    "revision": "1c9b0a044bff7a666bac6fc0268797b9"
  },
  {
    "url": "docs/4.0/examples/offcanvas/offcanvas.js",
    "revision": "5c0edf2d5a4d88ec65e801c0f58ef23a"
  },
  {
    "url": "docs/4.0/examples/pricing/index.html",
    "revision": "418289199fbd0b6749424611483058fd"
  },
  {
    "url": "docs/4.0/examples/pricing/pricing.css",
    "revision": "1e170831b26afb7a6bcde4f0bc2cb29b"
  },
  {
    "url": "docs/4.0/examples/product/index.html",
    "revision": "7424fe35dc94c1190849c8627cc33ef0"
  },
  {
    "url": "docs/4.0/examples/product/product.css",
    "revision": "139ada632a48dc6b96a46a265a2cc60c"
  },
  {
    "url": "docs/4.0/examples/screenshots/album.png",
    "revision": "685d5277fdf6f04aefbcbe01ba93e9ef"
  },
  {
    "url": "docs/4.0/examples/screenshots/blog.png",
    "revision": "d06dc15ae8285908ec7ba9f4b1f98a44"
  },
  {
    "url": "docs/4.0/examples/screenshots/carousel.png",
    "revision": "dc04e087b8ad4f000fa64e266812fc0f"
  },
  {
    "url": "docs/4.0/examples/screenshots/checkout.png",
    "revision": "030255900e0b73653cf6a2d074f17b31"
  },
  {
    "url": "docs/4.0/examples/screenshots/cover.png",
    "revision": "ece97a4eb488c46a86a67d61db25dda2"
  },
  {
    "url": "docs/4.0/examples/screenshots/dashboard.png",
    "revision": "2fc93187d09b5b8c342b962576eaf39e"
  },
  {
    "url": "docs/4.0/examples/screenshots/floating-labels.png",
    "revision": "fae0436f9d026a67778f3a37d29b3dfc"
  },
  {
    "url": "docs/4.0/examples/screenshots/grid.png",
    "revision": "cb63b8b5fd89749a2d87342876306dd8"
  },
  {
    "url": "docs/4.0/examples/screenshots/jumbotron.png",
    "revision": "0f579cb67e8c8535d8fffef7d17b7e45"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-bottom.png",
    "revision": "0cefd6caed82af75be57d758633d9094"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-fixed.png",
    "revision": "1d38f157f0bbbd90957044d30eaef242"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-static.png",
    "revision": "2ff01be7ee251fc5c7f51ccf9de5f48d"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbars.png",
    "revision": "d4fbce8e1e38d78a5134e6be05cdd4d7"
  },
  {
    "url": "docs/4.0/examples/screenshots/offcanvas.png",
    "revision": "c581d49a56f3e9d0d1753195c62e719a"
  },
  {
    "url": "docs/4.0/examples/screenshots/pricing.png",
    "revision": "e33e2f37741c6d15c99f3378e2e551ea"
  },
  {
    "url": "docs/4.0/examples/screenshots/product.png",
    "revision": "af74e4f7ddfc8cf2a44a9c601881329f"
  },
  {
    "url": "docs/4.0/examples/screenshots/sign-in.png",
    "revision": "9e4bf345a8c21403868f70b777efb483"
  },
  {
    "url": "docs/4.0/examples/screenshots/starter-template.png",
    "revision": "1761d4e831e7c0659962e1abdb95421f"
  },
  {
    "url": "docs/4.0/examples/screenshots/sticky-footer-navbar.png",
    "revision": "428112965cf6826db55bcc6db07d9e5f"
  },
  {
    "url": "docs/4.0/examples/screenshots/sticky-footer.png",
    "revision": "59b69c34997abee3d477f836d44ce8a3"
  },
  {
    "url": "docs/4.0/examples/sign-in/index.html",
    "revision": "0739de40d4fb2333772503ff6a475b18"
  },
  {
    "url": "docs/4.0/examples/sign-in/signin.css",
    "revision": "9c798c2cdaef45f59a916c2051cbe197"
  },
  {
    "url": "docs/4.0/examples/starter-template/index.html",
    "revision": "b54e5fb4fb0c6bfad8e6ff47b6434d4e"
  },
  {
    "url": "docs/4.0/examples/starter-template/starter-template.css",
    "revision": "8cb4aab3660723b641b6458f1a1d3ab1"
  },
  {
    "url": "docs/4.0/examples/sticky-footer-navbar/index.html",
    "revision": "cf52f64c92b9c1fae606d610fe2d2116"
  },
  {
    "url": "docs/4.0/examples/sticky-footer-navbar/sticky-footer-navbar.css",
    "revision": "c5c610f36d8c2a89e7d587880ee0cd68"
  },
  {
    "url": "docs/4.0/examples/sticky-footer/index.html",
    "revision": "7f8a7abbce45fa7d948f8fe3a41c3545"
  },
  {
    "url": "docs/4.0/examples/sticky-footer/sticky-footer.css",
    "revision": "09630d01995ef9c0f8fc9ae622f00466"
  },
  {
    "url": "docs/4.0/examples/tooltip-viewport/index.html",
    "revision": "b1074cded6dd5b3603fd470151af233e"
  },
  {
    "url": "docs/4.0/examples/tooltip-viewport/tooltip-viewport.css",
    "revision": "59ee4352f399bfe798346b4be4a5f88f"
  },
  {
    "url": "docs/4.0/examples/tooltip-viewport/tooltip-viewport.js",
    "revision": "8b7dceb6d175f264b789114201387bfa"
  },
  {
    "url": "docs/4.0/extend/approach/index.html",
    "revision": "d9792e6366a130334ea65a7554ace64e"
  },
  {
    "url": "docs/4.0/extend/icons/index.html",
    "revision": "8c2c177f06ce3eefa8aab7ce94c7abfd"
  },
  {
    "url": "docs/4.0/extend/index.html",
    "revision": "c2395caad527a9ed104dfaa30b88bba6"
  },
  {
    "url": "docs/4.0/getting-started/accessibility/index.html",
    "revision": "5e5ae5737afa00733f51bac26d53003d"
  },
  {
    "url": "docs/4.0/getting-started/best-practices/index.html",
    "revision": "d727088a8e95f8b4b0be6608cd770933"
  },
  {
    "url": "docs/4.0/getting-started/browsers-devices/index.html",
    "revision": "e5120fd2e93c0236bdecc23306a777f7"
  },
  {
    "url": "docs/4.0/getting-started/build-tools/index.html",
    "revision": "62a60e836359526501f028ff78cce168"
  },
  {
    "url": "docs/4.0/getting-started/contents/index.html",
    "revision": "8c021759c0be57e13165a1c9b24504bf"
  },
  {
    "url": "docs/4.0/getting-started/download/index.html",
    "revision": "f7178ec48595d1ebd81042a6e42df3e2"
  },
  {
    "url": "docs/4.0/getting-started/index.html",
    "revision": "2070cd5f7ef63cd24f8c8b551b67a539"
  },
  {
    "url": "docs/4.0/getting-started/introduction/index.html",
    "revision": "e050c4e960bca3843bc8b00514019cde"
  },
  {
    "url": "docs/4.0/getting-started/javascript/index.html",
    "revision": "9f21af3e63fa3fedb9e16f591e5e0f7e"
  },
  {
    "url": "docs/4.0/getting-started/options/index.html",
    "revision": "7c11bb1f7bf740591ab01264fd352bd6"
  },
  {
    "url": "docs/4.0/getting-started/theming/index.html",
    "revision": "3fd240b1852bf24b0dcb31ccecf92206"
  },
  {
    "url": "docs/4.0/getting-started/webpack/index.html",
    "revision": "d1ba13bbf380f04cea1bfefb556d4100"
  },
  {
    "url": "docs/4.0/history/index.html",
    "revision": "6751d288b155a540a0a51e50377d9292"
  },
  {
    "url": "docs/4.0/index.html",
    "revision": "2070cd5f7ef63cd24f8c8b551b67a539"
  },
  {
    "url": "docs/4.0/layout/grid/index.html",
    "revision": "16e08997fad6653af855b8efd93ceab5"
  },
  {
    "url": "docs/4.0/layout/index.html",
    "revision": "03ea47b2f07893a3cb27a8cc94493a4c"
  },
  {
    "url": "docs/4.0/layout/media-object/index.html",
    "revision": "84631c5b93d01c589cc1e565b2fe713d"
  },
  {
    "url": "docs/4.0/layout/overview/index.html",
    "revision": "f195db7b5f1af6a6627154b3c06b57bd"
  },
  {
    "url": "docs/4.0/layout/utilities-for-layout/index.html",
    "revision": "a1a59d82ea897e0132003bf845b039cd"
  },
  {
    "url": "docs/4.0/migration/index.html",
    "revision": "d250bd3930dc75c0307fa88e79c44a53"
  },
  {
    "url": "docs/4.0/team/index.html",
    "revision": "6751d288b155a540a0a51e50377d9292"
  },
  {
    "url": "docs/4.0/utilities/borders/index.html",
    "revision": "8b9715e1101e299e93a1f415867881ed"
  },
  {
    "url": "docs/4.0/utilities/clearfix/index.html",
    "revision": "9408f7fa1c188b8ba5f21507e702fe3a"
  },
  {
    "url": "docs/4.0/utilities/close-icon/index.html",
    "revision": "4771d7663a5346a2317b3dc1faf6a8d9"
  },
  {
    "url": "docs/4.0/utilities/colors/index.html",
    "revision": "faf7ddc8ae57f402581318ec2fd58b3b"
  },
  {
    "url": "docs/4.0/utilities/display/index.html",
    "revision": "cfd4e6cbe52f58a01fa559dfd9137b92"
  },
  {
    "url": "docs/4.0/utilities/embed/index.html",
    "revision": "b65cd11554764e96c881d7a9ce350b21"
  },
  {
    "url": "docs/4.0/utilities/flex/index.html",
    "revision": "a8d7763e85d05ac172bb6deb82da24c3"
  },
  {
    "url": "docs/4.0/utilities/float/index.html",
    "revision": "a5e7e735c68c7077500a2c525f90394b"
  },
  {
    "url": "docs/4.0/utilities/image-replacement/index.html",
    "revision": "76cb8785b35ef1dcabdeef3f8bcaf2d6"
  },
  {
    "url": "docs/4.0/utilities/index.html",
    "revision": "9b5758a47652ecebfa0d95b63d0b2016"
  },
  {
    "url": "docs/4.0/utilities/position/index.html",
    "revision": "4926e038b429b86867f6ee31f58af084"
  },
  {
    "url": "docs/4.0/utilities/screenreaders/index.html",
    "revision": "1b28883a546a043dc0ab9ba2f435c03b"
  },
  {
    "url": "docs/4.0/utilities/sizing/index.html",
    "revision": "be3b5f38fcf1aba608b1649fe9083801"
  },
  {
    "url": "docs/4.0/utilities/spacing/index.html",
    "revision": "40d786df14a171dcdcad8ef4ed2c429f"
  },
  {
    "url": "docs/4.0/utilities/text/index.html",
    "revision": "5dd01f95462af47613255d5160333d9a"
  },
  {
    "url": "docs/4.0/utilities/vertical-align/index.html",
    "revision": "352ac91f2b61ea69e4ef11a0ca6d2322"
  },
  {
    "url": "docs/4.0/utilities/visibility/index.html",
    "revision": "8ef12c9fa174e6c608ec3493e9402c80"
  },
  {
    "url": "docs/getting-started/index.html",
    "revision": "2070cd5f7ef63cd24f8c8b551b67a539"
  },
  {
    "url": "docs/index.html",
    "revision": "2070cd5f7ef63cd24f8c8b551b67a539"
  },
  {
    "url": "examples/index.html",
    "revision": "cde36e682ab401a6a54380cdcb865f49"
  },
  {
    "url": "index.html",
    "revision": "b96f09cd0b0ee5e893fe3056e5a905db"
  },
  {
    "url": "redirects.json",
    "revision": "2c59d1fd84ffbc46a3965f5b83db87aa"
  },
  {
    "url": "sw.js",
    "revision": "42f72988cbd613ae00b4a2c3390712ae"
  }
])
