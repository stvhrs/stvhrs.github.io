'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4abf1dcb7300ef8a60448e87fc500d10",
".git/config": "f0de91110a16cc15b8c53078db072545",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "afd6b835c53dc277698da281516ebdc4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "70aab60e4f1c7a34b32cb99cd48d8056",
".git/logs/refs/heads/main": "70aab60e4f1c7a34b32cb99cd48d8056",
".git/logs/refs/remotes/origin/main": "79c72e7f67eec769d7294d8c280728ef",
".git/objects/01/3fd7b55afbb7e5e4fefdcfb9b37a101c07f74e": "e4bf648e8af7d28ab6fc4338e52e93f2",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/04/9d59ca0f0214c7328514332b58c3dc2060413d": "7392c99f05038e6e7b2fc0ac7b523e2b",
".git/objects/08/93d212c42d726cb00cdf27536223f82e6f45f5": "79f860ce69a938f569beb21281d27b97",
".git/objects/0d/7eb39d43910d24dd99690151c1f10a3a880041": "7e01eed73af5332a98b054036531a112",
".git/objects/0f/9919286428dfc11d8fcaf6ba1d7cb7bcc71a4b": "b79fe229a478f5f71fa3e11909e70d76",
".git/objects/11/b8036aebc21496ada9939aeeafdba08552003a": "3745cb1cb3183a5eafa1f40b4acb74c4",
".git/objects/11/d8cfb3c8f65a2e288ac22089b3f60aecd3945d": "380b02e97d622eb50e1a68af8258428f",
".git/objects/14/8f74f3eed8b651990c15162a12f2b316991472": "4ac751615fb993e2b112b386d2155b02",
".git/objects/15/ef2a35d56e6416757c2698d1e7d91b92bee748": "c891b7bb07048e04e1a456738e5bfe64",
".git/objects/19/4b3ac7d24313666208175cf4b61e3e3b0bda01": "8ddad9b1aad56b678134a432376317ac",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/b3bf87dab6b0dca4021e1e65e6e718cd6a4bf4": "e65c50eea50d8456f3798c8612772f6a",
".git/objects/1e/71b3f24a9bbb87a304e48fc510f9dcb2038002": "048b2ab7bf6ea9aab781324cc146375b",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/21/57d57703f295f7c5eeee0dd9a84ee983c39066": "e2553dc5a1ac79a082978964687f7389",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/26/ede45862c4a7b0989de4f1a41fa6b6cee0dfe0": "ce9699c65f5c5f3fa159b07ad0daa92c",
".git/objects/29/fa4512f21b61564761df5585a11be1cc985476": "decc5e942c917e8ed7ad81ac82d3f283",
".git/objects/2b/23b61c1d4fc1c5e10a28a5058ee9943f4458c2": "9476c8c0361d626d94df669df2ae7286",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2c/1c9a0242777de23ee2181c9c6808ff5cfefcfd": "39fe3dcf72b0cb25589347b278ab2829",
".git/objects/2d/d428c0ba04afb579832c6ee6773d3ab9b61333": "dbb7ac49bbec70518cf7242ce8ab28a6",
".git/objects/31/ef670c7a37611a862e8d8617266a127cb2bbcc": "f3ad7a014d72c1cacc27b3415fb21293",
".git/objects/34/0eb1cdd217b30c6eb1a941beeffa39ebc9f447": "0a5c84ac29603884aa457d1b2f1a1e28",
".git/objects/36/d3f56693c761905e238067a213ea21dbcc0f03": "9dde5af0860ea4bb13c1ed54f6a17cf6",
".git/objects/37/e63e9e884a2a55d9e1e6d0c352f45b580a5987": "769f04d0801a72a7d2970ca7bf0c4cd1",
".git/objects/38/44c858742050872a635e5f6fc85f10c902b8d1": "0ea8444541e6dac96ce6bf3fa2cc514a",
".git/objects/3d/abed2a06b8b511b3b6bb2e830c141b7f8fe7b8": "0ebfc4ab24e3b4674c1090cdfea1e9d7",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/43/cb6553022b20d49b0b0a68e7025e06f3a9c269": "60f03e8eaa784c0900e46e0f1f9b987d",
".git/objects/48/d34a8725caa308659397f933def4447a8a3aa4": "67e1d3a41f38afc17775f20b9cffd606",
".git/objects/4b/1043c6d20f277cad12fa1753bbf230b3b0a8d9": "b56877f682c883a433c69acddc248ae8",
".git/objects/50/a9af94fb7f5ff467a4233e31842b7373d14c2e": "a2e04fb020440646a939b6cd6a1a5adb",
".git/objects/50/dd4c52190fcf361f7879f2ac91640682b51ba0": "a386a9019eec9057dbc09ab2bf41a236",
".git/objects/56/e885eb014bd2812b755eee05e40cc16c37f967": "67440e95cb41b221e507de7a828bace4",
".git/objects/5d/0fd9397979f14fea802fbed2730cb03cfc00a5": "a4989ec92a2e286905376f6226dada4a",
".git/objects/5e/ba35632159a5ec71de4209784afe66efa44abf": "4de5750cd6954008ba9b4896d896e440",
".git/objects/60/cd2860cf446a615039239c88318641f1171159": "a2e4614c6f488c41645817005b597d81",
".git/objects/62/57454611a77bbdd3bc4a5978c83b64311d3f3e": "a5b2f5fb80c4821080a7f453759d73ff",
".git/objects/6e/bd7515cb99fe909f3f4beca1900d5386963ce5": "f91e4dd03a67ec72161dce1f36cb66e2",
".git/objects/6e/bdc73af4d3a66ae3fc691b8409c775ce0ba2a2": "831a52788a5f88fa572f5a383f81f71c",
".git/objects/71/f8ce535c21e0099014c2191bf6d65f889f3c7d": "7c5b46444034e90988000cb90b2c4f64",
".git/objects/77/26a300aa5c5d94d37622dd375ab1cfb515a381": "5189dde2b721b4d05451e025009a2c7d",
".git/objects/79/2bab4243dc0ebcdafeed26caba4be4241e9e34": "7b4471dfdc17451dbbbd72dd35a0ffb1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/8b4de2f826ec62844da45bc0da2230f41cc6be": "bacf82fa5c6c8c199c16417e454d9054",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/83/507da2cab1c7baa8ab76c242694a25f68441c2": "130de29defdc2a10d9cfd4e5830e8490",
".git/objects/85/bcf57973d74de716743346521d31d2dbf8e1c7": "4575adcd568d6f747a86d0d32d0554a6",
".git/objects/88/6709ecddde9d5c7c15c384bf8fbf1590523b93": "6515f75cc38aac1a379f6138dbcceeb1",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/3858b402165f4e163981116b52e758b96c8a6e": "c6a7be50238abe4d2ffc72884459cbba",
".git/objects/8a/d0f7cc808e6e6bd81541e4fecd5397a452c7da": "61aaa10f743fc5aefab0b4952be5a285",
".git/objects/8a/f99e3d85ede3bdf228756d7a977d85201ba6ed": "665a5827607d907a20c866eb59d11f99",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8b/997ac7dab13afbb8645b19dd4298bdc56fc1b6": "5f643da0902588e3e0580ef2484e2c6b",
".git/objects/8c/c68c7389095ce77ee7613e85f4b722615f2d34": "a6a275ba36bbe42be357321b98744ffe",
".git/objects/8f/0863882c4408b7db8c5c48032d951a6c827a34": "9f6ef6118964cc4d1444478acc97090e",
".git/objects/8f/90da97d2c64f4d44289f0b593e8f51fe95d7b6": "e72ad7f2c1464eb19a6cd8757eb07007",
".git/objects/95/592daa638b2436ce09bf47e8586d32796ccc19": "65f926bb24a4b3ae0f8246078bda672d",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9b/56bc07f83224adcf5bfce93449840422a98e82": "84f98566b4133817811d10a4ae952fe4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/b54bf650af7d5599987e738e6309c350d94109": "a201d92710762e497c6790131f1c21a2",
".git/objects/a3/3a55a463e4abca60aa1a9b70420c9a9a04125d": "33e2417fae44cbc11d3382067c698178",
".git/objects/a5/c2b3952cd346b7b518a9438e2e13636a8d8677": "fb819482731d5da6b0716f3f8e0b21de",
".git/objects/ac/d0e46d3c232063c255a5a6f63d021e60090612": "22df5f6d0e442f9626ca35809c4f081c",
".git/objects/af/bb4c9c200533141e89ca13fbdb91ae6073f8de": "a7c18e4b7724b2775672734c27459761",
".git/objects/b4/f8d12b9b1042a3bee8a03525a30f8fca8a1009": "0144ade20af661f5681fa79d8b0c5d85",
".git/objects/b6/15dd253313096aa13ef7b076a2e5dad92b62e0": "847d6771873764abebf3c9729ffa0acd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/7021c80f4f09a1b9bbfb37e093df674609649e": "434a7c07e61928007e6a7d39d2179bec",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/6d5680d0754a398d456524a8403d0295ead13b": "cfc0c193109ba577f797dd4ab488ae81",
".git/objects/bd/4610837a9c995ea98bb13d0602c7e040acba8c": "9cb7ec6c9d20476ba431e6724f8417f1",
".git/objects/c0/06d4b24723df4bc1065ac59835eee672a3484a": "df54b08520d60b1ee3131bfa18b8a029",
".git/objects/c2/cd7a0b9c0a35b104901bef5c062a8b3928b341": "c5524e81092a2fc27fce19c092763577",
".git/objects/c7/dd9ae049dead0aa9bfd43277e848391fc2f129": "5a19028640023955b01df237e97fcbf6",
".git/objects/ca/1dec2fe270af5b82fff7e38ef537f31d0c9bcd": "752fb63697ac9cabb6d0d65fa39a0a6e",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/b2ce916381a034e1bec589b747ce6a2a6af4a7": "98cbe7972886b3da8d883f01c15624c8",
".git/objects/cf/e1de07548a6e67f55dde0e0f8f72d79db91fbf": "7505686c5a7cbc99d18f90e2bb445acc",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d0/577dfc0af33c64cfa58204fd088d7acf6b9aa9": "ed547b098b3b820b471721b1a8349641",
".git/objects/d0/cfb6f2fbc890d5b923956848a2eb6b47fe0f33": "9a304fd11e772a72e51162c4f37e628b",
".git/objects/d2/95b91e7551fd654f197bd479433118dd873884": "b79c8f276435d31cc912806382f1fa1d",
".git/objects/d3/486b53255bba50c03ebb302a778a60018bd8bc": "c6949ff7283eeae22940bc0927d20915",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/e04c4ca3bf1f6f873c996c503edbbcddc89665": "06e3f00ecb6aa20967cab2384dcb02da",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/b4ab5a6e27e57b26d7003e2fd56476c046121d": "9338123591b9c98633738b2fd5529602",
".git/objects/e5/32d73e54bf04fd217df11d8d0ba5bde56cd292": "242d15b62d6f05e2ed38abf52f8f2bae",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/77e611fd21a86a1f4c1c1dd1d563537e96a2e2": "d8399451b5a5d608fae8fe7998aa258d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/e3b6df93ab2435b6f0bd0a1c7b17fd9a3bda49": "90a158499610ae517c97071fe7c6883c",
".git/objects/f5/542c01a914f411d1fe4aeecd821d9ee8647f44": "2e47e4a13353722ca42edc77549f69ad",
".git/objects/f7/b113d75c8c6f4c23f135bf116266a9a9f35755": "1687ecbdd1422a65ec018ab48de70f04",
".git/objects/f9/40f7c715080d54e53ecfeaa6ca4ee90c104a90": "6aac70855baba8e121de12ae6a8cec99",
".git/objects/f9/98fb76e633c544c3cd604f05656c88efba74a8": "32f58d4b92e04372dd9a7b4acaf00bb1",
".git/objects/fa/a695fe6a3ca0438a6b6aa38e9379a1e83c273b": "04d9fceadb0a3761346a5ee22ada89c0",
".git/objects/fa/f54a3451aaf3593d3f8257a7d562e08ca60317": "4b7542c4cc8c158fe86e1f1d5826692a",
".git/objects/fc/8da0da61bd153ca65c33d757492a285cb7b868": "549e280ae34be179e2f181f009d55af6",
".git/objects/fe/bea507a0be498607d7c13ca78d65bf5449c58a": "18b0811fe75c6670097d58b4ae2e293e",
".git/refs/heads/main": "6eaee6ad5d59e515622364777259f985",
".git/refs/remotes/origin/main": "6eaee6ad5d59e515622364777259f985",
"assets/AssetManifest.json": "965df084feec704695dd9b3e92e70954",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/c1.gif": "0211ba8bc2e9caa88c556413c4766fad",
"assets/images/c1.png": "bc7dca93c1fe1613d1084b42dfad910f",
"assets/images/c2.gif": "ce626a4477ee88e334f35858f3c1002f",
"assets/images/c3.gif": "c5fa67031ca9e4013354d956f6ce2864",
"assets/images/c4.gif": "b0cc0dab39265596328185d5a4066d88",
"assets/images/idt.png": "524ca748746d93370769572c2c2cc0b1",
"assets/images/logo.png": "2e2107ac1c396e259c27a71a8ba7becb",
"assets/images/pic1.jpeg": "e4761ffe35e0b57121959c5a0e84aa0e",
"assets/NOTICES": "a5fdbcd797fdd5fd19a6752685dc3d91",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/shaders/ink_sparkle.frag": "8d40d8a1f7be16961013a141d12b0506",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "2e2107ac1c396e259c27a71a8ba7becb",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf4eb09308959590ae91452ba2b729bb",
"/": "bf4eb09308959590ae91452ba2b729bb",
"main.dart.js": "dd26f52815e84dcb4f2ea4a0e0079239",
"manifest.json": "d454795ec90f470ee481df70d1276310",
"version.json": "12a92ef79835b40a6093bcc932b54998"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
