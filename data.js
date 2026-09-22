// Saturday Album Club listening history.
// One object per Saturday, from the start of the series through 2026-09-19.

const albumHistory = [
  {
    date: "2023-11-25",
    person: null,
    artist: "Paul Pena",
    album: "self titled",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/8f/7c/78/8f7c7817-782b-01a9-59d6-3af94184724e/05099902859958.jpg/1200x1200bb.jpg",
  },
  {
    date: "2023-12-02",
    person: null,
    artist: "Stevie Ray Vaughn and Double Trouble",
    album: "Texas Flood",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/27/50/02/27500228-f8e4-8c5c-bb1c-8bfbec68a5fb/886443827141.jpg/1200x1200bb.jpg",
  },
  {
    date: "2023-12-09",
    person: null,
    artist: "Paul Simon",
    album: "Graceland",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a7/73/c1/a773c1f0-281c-324c-204f-540444080ea8/886443445697.jpg/1200x1200bb.jpg",
  },
  {
    date: "2023-12-16",
    person: null,
    artist: "",
    album: "Stand By Me",
    notes: "soundtrack",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music/82/f1/87/mzi.lvooiexk.jpg/1200x1200bb.jpg",
  },
  {
    date: "2023-12-23",
    person: null,
    artist: "Wilco",
    album: "Sky Blue Sky",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music/d3/d8/8a/mzi.swwllzjm.jpg/1200x1200bb.jpg",
  },
  {
    date: "2023-12-30",
    person: "Casey",
    artist: "ABB",
    album: "Eat a Peach",
    notes: "Video presentation from Marshall",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9c/b5/33/9cb53320-8975-23a9-5045-28c412a5814a/16UMGIM14647.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-01-06",
    person: null,
    artist: "",
    album: "",
    notes: "slipped up and skipped due to holiday commotion",
    writeup: "",
    coverUrl: "",
  },
  {
    date: "2024-01-14",
    person: null,
    artist: "Black Sabbath",
    album: "Paranoid",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/be/27/91/be279120-2285-16c6-c7ba-9d6643d4a948/075992732727.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-01-20",
    person: null,
    artist: "The Band",
    album: "Stage Fright",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c0/2b/13/c02b1369-8a4d-dce0-8d6b-9165545d5084/00602547246493.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-01-27",
    person: null,
    artist: "Jurassic 5",
    album: "Quality Control",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/cd/e4/e3/cde4e302-4429-8d8c-7b76-d201ebb56d0f/5400863132385_cover.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-02-03",
    person: null,
    artist: "Tom Petty & the Heartbreakers",
    album: "Into the Great Wide Open",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/82/7f/96/827f96f5-4ef5-3216-d68f-be3e11fe160f/06UMGIM07741.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-02-10",
    person: null,
    artist: "Delbert McClinton",
    album: "Live from Austin",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/84/0c/57/840c576e-55c1-f701-37bb-ba4ef7e71388/111534.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-02-17",
    person: null,
    artist: "Neal Francis",
    album: "Changes",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1b/28/be/1b28be68-3b82-a7c7-bc15-b55b4a6dd1a6/60930.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-02-24",
    person: null,
    artist: "Grady Spencer & The Work",
    album: "Wait",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/70/c6/cb/70c6cbb4-9162-1ce2-b893-75f72ab87805/195269137090.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-03-02",
    person: null,
    artist: "Uncle Tupelo",
    album: "No Depression",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/76/54/c3/7654c33a-56f2-db67-4510-7b8e06990450/886443417298.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-03-09",
    person: null,
    artist: "The Meters",
    album: "Rejuvenation",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/dc/71/91/dc71916f-eabd-ae78-dda8-26ce039c02b6/s06.qsfyhnqw.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-03-16",
    person: null,
    artist: "Flaming Lips",
    album: "Soft Bulletin",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/da/cc/ca/dacccae4-4f00-f451-6051-46d04a7d5099/093624911791.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-03-23",
    person: null,
    artist: "The Who",
    album: "Who’s Next",
    notes: "PPP",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/a5/e7/70/a5e7703c-4e30-da7a-a319-2d3caef42c0e/23UM1IM04872.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-03-30",
    person: null,
    artist: "Ricky Skaggs & Bruce Hornsby",
    album: "Ricky Skaggs & Bruce Hornsby",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/b5/c0/69/b5c06968-81f2-fbf2-d46f-3be304a69853/mzi.lkpojrkf.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-04-06",
    person: null,
    artist: "War",
    album: "All Day Music",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/07/09/32/070932c2-65f3-b0e4-a4dc-4a5d930ada66/602527595320.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-04-13",
    person: null,
    artist: "The Marshall Tucker Band",
    album: "The Marshall Tucker Band",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/81/f4/76/81f47615-7a28-83a6-126b-595b77a9e0f0/886444603928.png/1200x1200bb.jpg",
  },
  {
    date: "2024-04-20",
    person: null,
    artist: "ABB",
    album: "Shades of Two Worlds",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/99/25/e1/9925e160-8ead-7b27-f225-d430a738863d/888880675590.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-04-27",
    person: null,
    artist: "Sam Cooke",
    album: "Live at Harlem Square",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/b1/80/5e/b1805ee4-39d3-32d6-0aef-e07595ec218a/dj.xndujmfn.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-05-04",
    person: null,
    artist: "Sturgill Simpson",
    album: "Metamodern Sounds in Country Music",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/24/5c/b1/245cb120-748e-982d-2bb9-4c21523e1b67/886444551298.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-05-11",
    person: null,
    artist: "Sam Bush",
    album: "Glamour and Grits",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music4/v4/87/1c/48/871c48ce-fdc1-df3c-d997-3d94f291239f/00015891384955.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-05-18",
    person: null,
    artist: "Jeff Buckley",
    album: "Grace",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/26/d6/e3/26d6e339-a7a9-d61e-1b5f-0852a5515a55/886445517880.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-05-25",
    person: null,
    artist: "Widespread Panic",
    album: "Light Fuse, Get Away",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music/d7/ad/7e/mzi.wqxxcfvu.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-06-01",
    person: null,
    artist: "Dan Auerbach",
    album: "Waiting on a Song",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b2/c2/09/b2c20979-a20e-aa2c-1924-21fd98c3401f/075597937503.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-06-08",
    person: null,
    artist: "The New Mastersounds",
    album: "Shake It",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/e9/04/07/e90407c6-f4f8-3f1b-d672-c98fd61682ff/194616194502_cover.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-06-15",
    person: null,
    artist: "The Wood Brothers",
    album: "Live at the Barn",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music71/v4/d5/3b/5f/d53b5fd1-06c5-1c14-d508-33f70c90e8fd/886446232652.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-06-22",
    person: null,
    artist: "Bob Marley",
    album: "Natty Dread",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/b9/ec/9f/b9ec9f4a-c4f1-5136-7587-86826e28d67b/06UMGIM34964.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-06-29",
    person: null,
    artist: "Allison Krauss and Union Station",
    album: "Lonely Runs Both Ways",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/6b/f1/04/6bf104d4-acdc-c0e9-f69f-01ca5600cf4d/00011661857223.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-07-06",
    person: null,
    artist: "Old Crow Medicine Show",
    album: "50 Years of Blonde on Blonde- Live",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/a2/73/a7/a273a74c-5e9c-b71b-007d-dd8d37a928a0/886446385518.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-07-13",
    person: null,
    artist: "Billy Strings",
    album: "Billy Strings Live vol. 1",
    notes: "",
    writeup: "",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/4/41/Billy-Strings-Live-Vol-1.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
  },
  {
    date: "2024-07-20",
    person: null,
    artist: "John Prine",
    album: "John Prine",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music1/v4/70/1f/ec/701fec1e-e9c0-6f34-9d0e-43eca7ae1e6a/603497887583.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-07-27",
    person: null,
    artist: "Tyler Childers",
    album: "Live on Red Barn Radio I and II",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/6d/40/34/6d40345d-f6dc-6e35-c5cd-510c1314f37f/859727285258_cover.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-08-03",
    person: null,
    artist: "Jack White",
    album: "No Name",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1c/e2/9e/1ce29ea2-4ceb-e775-9b4f-1191ea6155ab/810074424233.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-08-10",
    person: null,
    artist: "Shinyribs",
    album: "Well After Awhile",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c6/36/aa/c636aa10-cdfa-36ae-07f2-9a4ac682a0f8/859731017951_cover.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-08-17",
    person: null,
    artist: "Silk Sonic",
    album: "An Evening with Silk Sonic",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/c5/33/dc/c533dc8e-2baa-94f9-22be-e6e28945f932/075679754134.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-08-24",
    person: null,
    artist: "The Beatles",
    album: "Let It Be",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5f/ff/9a/5fff9a6a-bb13-6507-5e68-2793ef798834/21UMGIM61121.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-08-31",
    person: null,
    artist: "The Chicks",
    album: "Home",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music/5e/03/63/mzi.vwdssxbk.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-09-07",
    person: null,
    artist: "Talking Heads",
    album: "Stop Making Sense",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/57/94/37/57943788-4a20-07db-1ed9-1fd526a7d0f4/mzi.wfxekfgc.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-09-14",
    person: null,
    artist: "Beastie Boys",
    album: "License to ill",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/e4/d7/81/e4d781e8-bd3f-486a-cd18-e9b3a7d12b34/00731452735126.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-09-21",
    person: null,
    artist: "Aretha Franklin",
    album: "This Girls in Love With You",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/88/c9/9e/88c99eda-2749-f234-cbd2-4943b9492756/603497896684.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-09-28",
    person: null,
    artist: "Crosby, Stills & Nash",
    album: "self-titled",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/09/f9/b7/09f9b792-1c73-f25d-79e0-a825b2a26695/081227329068.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-10-05",
    person: null,
    artist: "My Morning Jacket",
    album: "Z",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d6/6e/a3/d66ea33c-98ff-f0a3-a7ec-19070c9b5dcd/00880882666057_Cover.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-10-12",
    person: null,
    artist: "Lyle Lovett",
    album: "Pontiac",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/97/a2/4d/97a24db9-c512-14a5-b8f5-307f5c4a6b1a/715187900622.png/1200x1200bb.jpg",
  },
  {
    date: "2024-10-19",
    person: null,
    artist: "Dolly Parton",
    album: "The Grass is Blue",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/05/fd/56/05fd56e4-cc39-3018-2c51-b9ee64df872a/015891390055_Cover.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-10-26",
    person: null,
    artist: "Red Clay Strays",
    album: "Made by These Moments",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/02/17/78/021778f3-9c1f-e211-30b6-854109b992ae/196871996808.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-11-02",
    person: null,
    artist: "Grateful Dead",
    album: "Fallout from the Phil Zone",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music/e6/2a/e3/mzi.gsmmaspd.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-11-09",
    person: null,
    artist: "Drive by Truckers",
    album: "The Dirty South",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/85/b6/f8/85b6f83a-7e03-1562-093f-0e78234f7108/1803.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-11-16",
    person: null,
    artist: "B.B. King",
    album: "Live at The Regal",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/bc/fa/b8/bcfab88a-c67d-54c2-418d-dcd28420a507/00602547481955.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-11-23",
    person: null,
    artist: "Hiss Golden Messenger",
    album: "Sanctuary Songs",
    notes: "",
    writeup: "",
    coverUrl: "https://i.discogs.com/tlgVLQUAdT8xETKY0taGC3TsMgxPxFM6LI8W_ZIaEhQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2OTI1/MzAxLTE2MTA2NDA3/MjktMjM4NS5qcGVn.jpeg",
  },
  {
    date: "2024-11-30",
    person: null,
    artist: "St. Paul and the Broken Bones",
    album: "Half The City",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/76/ab/95/76ab9554-776e-b380-b5af-fd5916e2921c/198846602950.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-12-07",
    person: null,
    artist: "Pearl Jam",
    album: "Ten",
    notes: "",
    writeup: "",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/6/6f/Pearl_Jam_Ten_Alt_Cover.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
  },
  {
    date: "2024-12-14",
    person: null,
    artist: "Waylon Jennings",
    album: "Honky Tonk Heroes",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e7/8b/07/e78b0739-74ca-14ee-854d-a1aa12426659/886445321500.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-12-21",
    person: null,
    artist: "Pink Floyd",
    album: "Wish You Were Here",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/aa/e0/ab/aae0ab6a-d906-a189-81bf-70b56aa43f7a/886445635843.jpg/1200x1200bb.jpg",
  },
  {
    date: "2024-12-28",
    person: null,
    artist: "Allen Toussaint",
    album: "Sweet Touch of Love",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/1d/df/f3/1ddff391-b057-d354-b3c5-ee309e2fd73d/2.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-01-04",
    person: null,
    artist: "Jim Croce",
    album: "You Don’t Mess Around With Jim",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/af/1e/ea/af1eeac7-1c1f-2190-24b6-21a03ca5ac8f/5032698667321.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-01-11",
    person: null,
    artist: "Billy Preston",
    album: "The Best",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/5d/20/53/5d205376-0b6b-7809-bb44-39898319db4b/00082839320528.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-01-18",
    person: null,
    artist: "Johnny Jenkins",
    album: "Ton-Ton Macoute!",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/53/fe/59/53fe5985-2442-8a0e-1308-c36879401b80/00731453610620.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-01-25",
    person: null,
    artist: "Ry Cooder",
    album: "Paradise and Lunch",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/6a/5e/ba/6a5eba90-64b5-9e4d-f591-d1493d5e7842/mzi.hwwgdzvo.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-02-01",
    person: null,
    artist: "The Rolling Stones",
    album: "Exile on Main Street",
    notes: "",
    writeup: "",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/c/ca/ExileMainSt.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
  },
  {
    date: "2025-02-08",
    person: null,
    artist: "John Mayer",
    album: "Continuum",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/7a/a0/f4/7aa0f487-f983-390e-73ef-005115eea1e0/dj.oqpplyfm.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-02-15",
    person: null,
    artist: "R.E.M",
    album: "Document",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e8/a9/b3/e8a9b351-578c-12b7-4cc4-791b90fac17b/00602537796731.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-02-22",
    person: null,
    artist: "Pretenders",
    album: "Learning to Crawl",
    notes: "",
    writeup: "",
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music/3a/38/f9/mzi.tiwmdwvb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-03-01",
    person: "Sean",
    artist: "Turnpike Troubadours",
    album: "Goodbye Normal Street",
    notes: "guest curator: Anne Mar",
    writeup: `Here is my pick for the night, I hope I don't disappoint! I first
learned of this band around 2013 from a guy that I worked with. I
immediately loved it with the second song standing out early on. A few
years later Sean and I had planned to go see them live when the poor
lead singer had some issues that made them cancel the tour. The band
kind of fell apart and thought we had missed our chance. The singer
finally got his act together and recently put out a new album that was
one of their all time best. Fast forward to last fall and we got to
finally see them! I knew most of their music but the entire crowd knew
every word and sang it out! This is some fun Sat night music so I hope
you enjoy the listen! It's the Turnpike Troubadours : Goodbye Normal
Street.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/85/ff/ba/85ffbab3-54c6-58fd-1420-ec2bdcf8d006/Cover.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-03-08",
    person: "Casey",
    artist: "Eric Clapton",
    album: "Slowhand",
    notes: "",
    writeup: `Tonight's album is a prime example of why I love the Saturday
at 6:00 concept dating back to when I used to listen to the weekly
segment on That Station. Despite being familiar with Eric Clapton's
catalog and reputation, I'd never really listened to an album outside of
the Unplugged record. In this case, I knew his "Slowhand" nickname, but
I'd never listened to this studio recording until one Saturday night 4-5
years ago. If you are like me then you will know the first three songs
by heart and then the fun will really begin. It is pretty incredible
that he opens this with three big time radio hits (sky point to J.J.
Cale for Cocaine) and they have kinda overshadowed six other great songs
all these years. There have been numerous re-releases of this, but the
original version is 9 songs long and ends with "Peaches and Diesel."
This one stays in my rotation throughout the year, and I hope you enjoy
it too.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e6/8b/8e/e68b8eb1-ddce-3332-4e66-5a15ccc04d6f/00600753407301.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-03-15",
    person: "Jeremy",
    artist: "Acoustic Syndicate",
    album: "Live From The Neighborhood",
    notes: "",
    writeup: `A little twist on tonight's album, only because my
recommendation is based on the way I was exposed to it...through passing
around burnt cd's. This is a live album that took me years to realize
there was a second half to given the lack of internet at the time and
the regional popularity. Sooo I'm only recommending the first 11 songs
unless you're inclined to continue.

I've probably listened to it 100 times since college because it starts
hot and goes that way from start to finish. It popped back in my head
this week when Casey and I visited the evening muse. My first visit ever
to a small venue was to see this band at Cats Cradle in chapel hill.
Opened my eyes to a new world of music and places to watch it.

My college roommate from western Nc loved these guys and dragged me
along. Instant fan and for me the start to finding progressive
bluegrass...with a saxophone for extra measure. Hope you enjoy some
Acoustic Syndicate "Live from the neighborhood"`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/00/ac/e6/00ace66b-a249-1bd0-aa4a-65108c7e470e/800314102229.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-03-22",
    person: "Brian",
    artist: "The Traveling Wilburys",
    album: "Vol. 1",
    notes: "",
    writeup: `I first discovered this band as a child, one late afternoon
when I was flipping through MTV, which, back then, actually played music
videos. There it was, this strange and wonderful mix of iconic artists
in a single video, and I couldn\\'t help but feel that something magical
was happening. The video was for \\"Handle with Care,\\" and there was
something about that catchy tune, those harmonies, and the unmistakable
voices of legends like Bob Dylan, Tom Petty, George Harrison, Roy
Orbison, and Jeff Lynne that made me stop and listen.

As part of our Saturday Album crew, we've already enjoyed the sounds of
Tom Petty, The Beatles, and even a cover of \\*Blood on the Tracks\\* by
Old Crow Medicine Show, so it felt only natural to dive into the
collective genius of the Traveling Wilburys. Listening to this album
now, it feels like a perfect fusion of the voices and styles we\\'ve come
to love, with a playful, effortless energy that only a supergroup like
this could create. It's a timeless collection of music, full of heart,
humor, and an undeniable charm that continues to resonate with us today.

Can you tell that my summary was created using Chat GPT?

Gents, enjoy this treat, The Traveling Wilbury's Volume 1`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/2e/50/a1/2e50a171-3ec4-f0f9-a965-336c88e753e9/0888072392809.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-03-29",
    person: "Bagley",
    artist: "Neil Young",
    album: "On the Beach",
    notes: "",
    writeup: `Happy Saturday fellas! It's my first day of 16 unemployed days
and it could not get any better right now. Not too shabby timing on the
weather either.

Tonight's artist is one of my all time favs. One of my musical heroes
really. Obviously I love his music but also admire how he has
successfully gone back and forth between the folky stuff and then the
harder rocking stuff.

Tonight's album is from the mid 70s era when he did a few harder rocking
albums, and this one is my personal fav. It's got a couple tunes that
panic has covered over the years and it's an overall badass album.

Thought I'd send this over for those folks who may want to get their
listen in before the evening of basketball. Hope y'all enjoy Neil
Young's 1974 album On the Beach.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/df/58/ad/df58ada0-61d7-6b41-ceb4-b219ca5dc088/093624924715.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-04-05",
    person: "Sean",
    artist: "Black Crowes",
    album: "The Southern Harmony and Musical Companion",
    notes: "",
    writeup: `Happy Saturday everyone! Time to grab a cold one, hopefully
outside, get your speakers and get ready to turn it up. Today's album is
a classic and a rocking good time!

This may be the third or fourth band we have listened to that hails from
Athens, GA. (There must be something in the water down there) Choosing
an album for this group was not easy. While not my favorite this
selection is what established these guys as true rock and roll stars and
pretty much kicks ass from start to finish. No sophomore slump with this
one!

Seeing them live at an absolutely slammed Neighborhood Theater still
ranks in my all time top 5 shows and may go down as #1. Imagine a
bombastic ear splitting level 10 performance of 'No Speak No Slave'
(track 8) where I thought the roof was literally going to come off the
place.

With that I hope you enjoy this classic from 1992, it's The Black Crowes
: The Southern Harmony and Music Companion. Enjoy!!`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/0f/a3/5e/0fa35e21-4117-c246-6b8b-fefda10f31d5/00602537350872.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-04-12",
    person: "Casey",
    artist: "Tedeschi Trucks Band",
    album: "I Am The Moon: IV. Farewell",
    notes: "",
    writeup: `Five years ago was a pretty miserable time. People were dying,
Trump was lying, and we were all stuck at home. One positive that was
taking place though was the concept for the project involving tonight's
album. If you ever have 2.5 hours to kill, put on the entire "I Am The
Moon" record by Tedeschi Trucks Band. A friend of mine named Sean
drunkenly texted me after doing this and correctly called it a true
masterpiece that would be more and more revered as time goes by. I would
agree.

I know we are scattered and I hope everyone is enjoying wherever they
are and the greatest sporting event of the year. For this weekend's
purposes, we are going to go with the final installment of this series:
I Am The Moon: IV. Farewell which is probably my favorite piece. While
this includes what will be a lasting hit in "Soul Sweet Song," I like
the finale the best. "Another Day" is just about the perfect combo of
Susan's voice and Derek's guitar, and it is not only the sendoff from
this segment but also the entire project. I hope you enjoy whenever you
can get around to listening; I knew that it would be good any time of
day or part of the week.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/34/50/94/3450943c-72df-f09c-ba0e-49066e46d537/22CRGIM31614.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-04-19",
    person: "Jeremy",
    artist: "Jimmy Buffett",
    album: "Living and Dying in 3/4 Time",
    notes: "",
    writeup: `Tonight's listen is one that can be enjoyed by the whole
family...and by that I mean sister in laws and parent in laws because
we're all down at the beach. And the beach is primarily what this artist
is associated with.

While everyone knows the beach loving lifestyle of Mr Jimmy Buffet, less
folks spend time in some of the original albums that towed closer to the
country line, some in sound but a lot by the story telling nature of the
songs. A lot of songs on this album tell of life on the road or even
back then the struggle with big music labels. My fav on the album and
high over all is West Nashville Grand Ballroom Gown.

I always like to add a fun fact for you guys and tonight's is tied to
the song "ballad of spider John" which is a cover of a song by Willis
Alan Ramsey...while you probably don't know him you probably know
another song of his that was covered called Geraldine and The Honeybee
by WSMFP (uber cobra album).

Anyways, enough of the chit chat...hope you guys enjoy Jimmy Buffets
"Living and Dying in 3/4 time"...also feel free to skip Brahma Fear`,
    coverUrl: "https://m.media-amazon.com/images/I/91ueR5-u+VL._SX425_.jpg",
  },
  {
    date: "2025-04-26",
    person: "Brian",
    artist: "James Taylor",
    album: "Greatest Hits",
    notes: "",
    writeup: `This American Treasure was the first compact disc that I
purchased for myself when I got my first disc-man circa 1993. It was a
two-disc Live album that I picked up because this was my favorite
musician at that time. I picked it up at The Record Exchange at
Cotswold- where I soon after purchased my first WSP cd (Space Wrangler).

The opening song on this particular album was also the song that Ali and
I chose for our first dance at our wedding. Casey can confirm that it
has to have been the shittiest version of that song ever performed by a
human being. God, that cheesy wedding band absolutely butchered it.

Anyways, I hope you will sing along to some timeless classics from a
true legend, Mr. James Taylor.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/e2/0b/2f/e20b2f96-92f8-70ef-664c-951500854f03/603497847747.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-05-03",
    person: "Bagley",
    artist: "Galactic",
    album: "Ruckus",
    notes: "",
    writeup: `Evening fellas! And happy derby day. Get those mint juleps
whooped up!

Now while I truly love Jimmy Buffett and James Taylor, I think it's time
to pick up the pace a bit this week. I doubt Jeremy's in laws would
approve of this pick.

2003 was a big year for me mainly because it was the year I started
dating Leigh. And one thing we bonded over immediately was music.
Notable albums that came out that year that we wore the fuck out hanging
out drinking and smoking until 3am were Hittin' the note by ABB, Panic's
Ball, and this album. All three hold a special place in my heart.

This is this band's fourth album but the last one with their original
singer who had to leave the band due to health reasons. It is produced
by a guy with an electronic/hip hop background so the album decidedly
has that feel. And it absolutely jams.

Hopefully it fits the mood for those getting ready for a concert or
gearing up for those horses tearing down the backstretch.

Get ready to shake your ass and groove to Galactic's Ruckus.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/5f/a1/9f/5fa19f2a-ab5c-ab4e-e825-4c4d885fb82c/5029575121229.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-05-10",
    person: "Sean",
    artist: "Led Zeppelin",
    album: "Led Zeppelin IV",
    notes: "",
    writeup: `Happy Saturday everyone! Let's get right to it. How this band
has escaped Saturday this long is shocking.

Featuring 4 members who are all on the Mount Rushmore in their
respective roles. You have quite possibly the hardest hitting bad ass
drummer of all time. A quiet and sneaky genius on bass who contributes
as a multi instrumentalist adding mandolin, guitar and keys on every
album. An iconic guitar player (both rhythm and lead parts) who has
written some of the most memorable riffs in rock history. And a front
man that all who followed have, in some fashion, modeled themselves
after. It's John, John Paul, Jimmy and Robert and of course we are
talking about Led Zeppelin.

Now, while picking the band was easy, the album has been an absolute
challenge. The first 6 albums are all worthy. It's mind boggling how
good each of them are. I've tossed around each one but finally settled
on my first love. I got this album in 6th grade and liked it so much I
drew each of the members "symbols" on my backpack. (I was such a cool
kid) This album is a true classic and captures them in all there glory;
blues rock (tracks 1,2), folk (track 3,7), funk (6) and 2 epic rock
classics (4 and the monster closer 8). Track 4 is played out as anything
in classic rock but listen to it like it's your first time and enjoy it
for what it is.

Gentlemen, it's time for Led Zeppelin IV. As always, grab a cold one and
turn it up!`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5c/15/9b/5c159b27-95ca-b9a7-84e3-28e795fffd39/dj.kvkrpptq.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-05-17",
    person: "Casey",
    artist: "The Heavy Heavy",
    album: "One of a Kind",
    notes: "",
    writeup: `4:00 listen down here. God bless, Jeremy.

Despite having a couple live listen selections under my belt, this week
presented a new challenge. Among the considerations were:

We have two extra listeners.

This album will serve as a stage warmer for a live Panic show.

But the biggest X factor of the whole situation is what condition I'd
find the group in upon my arrival in Charleston. Things were quite shaky
in September '23 when I met the group in Wilmington.

For this reason, I had three albums ready depending on what I found:
ready to party, near death, and somewhere in between. This afternoon's
selection is the ideal scenario (aside from Haarb) and I'm thinking it
is likely an introduction to a new band.

On our drive to Augusta from Fripp on a dark Sunday morning last month,
this band appeared in my algorithm. Lindsey and I were amazed that every
song that came on was really damn good. So the next day, I checked out
this album by The Heavy Heavy, and the initial impression held up. This
album sounds like so many different bands and features some badass
guitar. I honestly think it ranges from My Morning Jacket to Fleetwood
Mac. Let's get this party started with "One of a Kind" by The Heavy
Heavy.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ff/a2/85/ffa28567-2947-d210-7c26-d7e8375603ea/1353.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-05-24",
    person: "Jeremy",
    artist: "Credence Clearwater Revival",
    album: "Cosmo’s Factory",
    notes: "",
    writeup: `Alright fellas...what tonights band was able to pack into their
four years of existence may be greater than any band ever in that same
amount of time (some have likened them to the same kinda of run as Fire
and Ice bbq). An unbelievable amount of top hits with three albums
released in 1969 alone and tonight's released in 1970.

Now, this band might sound like they grew up knee-deep in the
Mississippi mud, but they were actually just four dudes from El Cerrito,
California. These swamp rock pioneers never lived anywhere near a swamp.
But John Fogerty's gritty vocals and the band's tight, rootsy groove
made it all feel real enough to make you sweat like Brian carrying Haarb
out of a tennis center.

This album is only about half an hour long, but it packs more Americana
into 30 minutes than most bands manage in a decade. It's got folk,
blues, rockabilly, swamp rock, and protest all wrapped up with Fogerty's
raspy voice and that unmistakable CCR groove.

So crack a beer, cue the imaginary washboard, picture Brian eating that
crawfish pie tonight and let's hang for a half hour in "Cosmo's Factory"`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f3/81/ca/f381ca2b-0779-4102-2c64-8b2563eedb96/00888072355996.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-05-31",
    person: "Brian",
    artist: "Albert King",
    album: "I’ll Play the Blues For You",
    notes: "",
    writeup: `I have been all over the place the last few days with tonight's
album selection. I wanted to tie something in with Anna's graduation
being yesterday, and looked into newer artists that she likes as well
some of the top albums from the year I graduated high school. While some
of them are decent, none of them hit the vibe I am feeling for this
evening's listen. Maybe I will get to them in the future, but I instead
punted to this album which I first listened to at some point while in
college. It has been on my list for over a year, but was never in the
right mood for it.

The first song is my all-time favorite blues song, and the rest of the
album has plenty of riffs to keep your head bobbing and eyes squinted up
while you prepare dinner or just listen to it with golf on in the
background. Maybe desiring some blues this evening was my subliminal
being telling me I am kind of sad about Anna heading off soon, even if I
am not outwardly feeling it. Who knows? Regardless, enjoy this dirty
little album... "I'll Play the Blues for You" by Albert King.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/4e/b2/0e/4eb20ef8-ec13-28d6-6cdc-97c2a765b507/25CRGIM52955.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-06-07",
    person: "Bagley",
    artist: "Lynyrd Skynyrd",
    album: "Second Helping",
    notes: "",
    writeup: `Happy Saturday fellas! Tonight's band was my brother's favorite
band in high school. And since he is about eight years older than me,
this meant I got a very early introduction to these boys. And a lifelong
love of them has ensued. Unfortunately, their well known 1977 plane
crash put an end to the "real" band. I think their genius is maybe a bit
lost since they are known for a couple HUGE songs and for being
associated with confederate flag imagery. Nevertheless, their catalog
speaks for itself in my opinion. Of the five studio albums they made, it
was tough to choose the right album but I ended up choosing the one that
I felt best represented their body of work. This album starts with
arguably the most famous southern rock song of all time and then goes
into a largely forgettable tune. But after that the rest of the album is
quite solid. Go on ahead and get you a little Second Helping from Lynyrd
Skynyrd.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f3/1e/c2/f31ec2df-8420-ea26-6d30-0561f9f5b5ec/06UMGIM04107.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-06-14",
    person: "Sean",
    artist: "Phish",
    album: "Farmhouse",
    notes: "",
    writeup: `Happy Saturday everyone! Looking back at the recent picks I see
everyone has been bringing A+ material! Hopefully the trend will
continue this week.

My pick was easy once I realized I would be spending Saturday afternoon
with a bunch of old college friends (minus Bagley). This band was a
consistent listen during many late night hang outs, road trips and
various other shenanigans.

I know this band can be polarizing so I wanted to pick something
straight forward and digestible if you aren't familiar with them (not an
easy task) and under the hour time limit (an even harder task). This
album comes from the end of their "1.0" period and is filled with upbeat
pop tunes while still pulling in some of the quirky aspects that made
them the most popular jam band of our era (sorry Panic fans).

With that, I hope you enjoy Farmhouse from Phish!`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/94/ab/37/94ab37d8-052c-5bd4-0a6d-f4048c2b422b/mzi.bmwiifok.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-06-21",
    person: "Casey",
    artist: "Jerry Jeff Walker",
    album: "Viva Terlingua",
    notes: "",
    writeup: `Hiiiiiiiii, Buckeroos. Sat album time again.

Summer is officially here, and tonight's featured artist/selection is
perfect for kicking back and having a good time. I'd imagine we have all
listened to this guy for years. With that being said, I was stunned when
this record appeared on one of my friend's list of favorites. I don't
know anyone that knows more artists and their catalogs so for this
gentleman to appear on his pantheon of great albums was quite a
statement. And he's right; it is absolutely fantastic.

I can't say for certain, but I'll be shocked if you all aren't singing
the chorus of the first song by the 35 second mark. Without further ado,
I give you "Viva Terlingua" by Jerry Jeff Walker.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a9/e4/ef/a9e4ef04-1503-9c1e-6e0c-948bdb30ae91/00076732091920.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-06-28",
    person: "Jeremy",
    artist: "The Undisputed Truth",
    album: "The Undisputed Truth",
    notes: "",
    writeup: `This week's pick comes after change due to Casey's pick last
week and I hated to double up the genre. Last week I was cooking and
told Alexa to play some cooking music and she threw on a Motown channel
(including some "meters" jams, shout out bagley). I started going
through some classics at work and was further convinced when Motown was
playing while I got my oil changed.

But I also wanted something I figured none of us have really heard. I
love some of the different stuff we throw on from time to time. So
tonight's choice comes from a weird, groovy corner of the Motown
universe --- a place most people never knew existed. The Undisputed
Truth were a psychedelic soul group formed by Motown producer Norman
Whitfield, who was already known for his work with The Temptations.
Think of this album as Motown's experiment: same soul roots, but warped
through a fuzz pedal, political edge, and a lot of incense smoke.

You'll recognize "Smiling Faces Sometimes" --- the hit single that's
haunting and paranoid, like a soul version of a '70s conspiracy film.
But there's more going on here: a cover of Aquarius (thanks anchorman),
a 10 min version of ball oc confusion (I had to skip after a whole),
heard it through the grapevine as well.

Fun fact: the band's version of "Like a Rolling Stone" (yes, that Dylan
song) is one of the boldest and strangest covers Motown ever released
--- and it somehow works.

I hadn't heard any of the first four songs and loved them as classic
Motown...the trippy shit is in the middle and closes with those covers.
Hope you guys enjoy something that's maybe a little different.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/2d/22/72/2d2272b8-35fe-b738-fd2d-d26a311b591b/00602567413561.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-07-05",
    person: "Brian",
    artist: "Tower of Power",
    album: "Tower of Power",
    notes: "",
    writeup: `Tonight, I will be attending my first ever Charlotte FC game.
As someone who could give two fucks about the outcome of an MLS game, I
am most excited about taking in the environment and watching these fans.

When I think of soccer fans, I think of vuvuzelas, of which I hope there
are plenty this evening. So, for tonight's album, we are going to get
down to some horns!

My introduction to this band:

I had just graduated from college earlier in the day and was emotionally
driving home to Charlotte when an album came on a local radio station
titled Fillmore: The Last Days. This band was on the compilation album
of artists that had routinely played in Bill Graham's venue over the
years and included some pretty big names that got their start in the Bay
area.

I have always been a fan of bands that had horns in their ensemble and
so these dudes stuck out for me. Really enjoyed the song or two they had
on the album.

A few years later, one of their former members got caught up in the
whole Barry Bonds steroid scandal, as he had left the band and founded
BALCO, the company that was supplying all of the MLB dudes that were
jacking dingers left and right.

They bring some old school funk in addition to a little Ocean Drive shag
vibe to a few of their tunes.

Anyways, enjoy this random album by this crew of dudes that are still
getting after it today, nearly 60 years after their founding.

Here is their self-titled album from 1973- Tower of Power.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/c1/e7/0f/c1e70f4c-6f7e-7c4c-be9a-cc42f279ed85/dj.ajlmhwne.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-07-12",
    person: "Bagley",
    artist: "Robert Earl Keen",
    album: "Best",
    notes: "",
    writeup: `Man it is hot as shit out there. Sean, hopefully Colorado is
providing some relief.

When I got thinking last night about what artist to showcase today, it
came to me very quickly.

I was quite impacted by the devastating floods in Texas. Perhaps more
than I should have been given I had no personal connection to anyone
affected. But I had just picked up my two girls that morning of July 4th
from Camp Cheerio after a two week stay. I think just seeing the
pictures of those lost girls and realizing how easily that could have
been my girls made me reflect a lot. Combine that with the fact the
Texas hill country is a huge bucket list item of mine. For years I've
been telling anyone who will listen that I can't wait to go down there
rent an Airbnb in the hills and see great music, eat great food, and
mess around on the Guadalupe. Looks like that trip will have to wait a
few years.

Tonight's artist is a big favorite of mine. So much so that I was well
aware that he had a ranch in Kerr County. If you've been reading about
the floods you may have come across some of REK's posts about his own
girls being campers back in the day at the very camp that was greatly
affected. Ironically I had added him to my "potential album candidates"
list just a few days before July 4th.

Anyway, clearly I felt compelled to play him tonight. I struggled to
pick an album as I don't feel he has one that stands out as "the one."
So I decided on going with a compilation album that runs 75 minutes
(sorry). But the tunes are so great and you all probably know many of
them so well that the time will fly! Please enjoy Robert Earl Keen's
compilation titled simply Best.

p.s. the transition from feeling good again to gringo honeymoon always
puts a smile on my face 😀`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/9a/64/24/9a642469-b62f-a392-af7d-8e19431ef312/13164.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-07-19",
    person: "Casey",
    artist: "Steely Dan",
    album: "Aja",
    notes: "",
    writeup: `Scoutmaster Sean put in a call to the bullpen while he's out
hiking at Philmont. Even though we are just switching weeks, I feel some
odd pressure to pick an album he would like...and I think I came up with
a good balance of my selection and honoring his wishes.

A couple weeks ago while floating in the pool at Villa Alegria, we began
a drunken, late afternoon conversation about the Saturday series. When
the topic came to what we all have in reserve on our benches, we shared
one album that we have in common.

I really think that tonight's featured artist is one of the most
underrated bands of all time despite extensive radio play: Steely Dan.
My late stepfather-in-law loved these guys and felt there was nobody
close to them. He even named his last dog Aja in honor of this
masterpiece we will enjoy tonight.

The funny thing is, I have always loved this album because of him and
just how good it is, but I'd somehow missed how highly regarded it is
until I watched HBO's Yacht Rock documentary (a must watch). Aja is
considered to be a perfect studio album; music nerds universally say
that there isn't a missed note on it. When I listened to it through that
lens this spring, I tended to agree. Be careful not to call this yacht
rock though - if you've seen the documentary then you know how Donald
Fagen feels about that! Enjoy fellas.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/c2/3c/54/c23c5414-20d1-7aea-f0f5-187974c58d65/23UMGIM79990.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-07-26",
    person: "Sean",
    artist: "Willie Nelson",
    album: "Red Headed Stranger",
    notes: "",
    writeup: `I'm alive! (And just now realizing a few of my heroes aren't).
I don't have time for a long write up but have been thinking about my
pick over the last couple of days on the trail. I guess it's the
solitude, the feeling of being in another era, and walking alone with my
thoughts but one album kept popping up in my head. I'm sure you are all
familiar with the album even if you have never listened to the whole
thing. It's a little slow but a fantastic listen. So for tonight we are
going with Willie Nelson's (I hope he is still alive) Red Headed
Stranger.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/88/d6/67/88d6676e-67ce-f907-d4fe-eae50f805f63/074643348225.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-08-02",
    person: "Jeremy",
    artist: "Avett Brothers",
    album: "I and Love and You",
    notes: "",
    writeup: `Tonight's album is surely going to get lost in the shuffle of
energy celebrating the big guys 50th...but it doesn't stop my conviction
in choosing it because I think this band is one of the many things in
the early days that started building the bond between this group.

While we've all been a little let down by their most recent albums and
hope for a future divorce for one of the bros, so we can go back to
getting some good tunes, the songs of yesteryear have brought us all a
ton of joy. One of the greatest concert evenings on December 30th of
some year in the 20-teens that was spent not just with the bulk of this
group but half the people at his shindig tonight.

Not sure it's my favorite, but they're most popular and can't not choose
the one where Brian has the lyrics on his damn wall. Please enjoy the
killer food tonight and great fellowship with a little background music
from our friends the avett brothers and "I and love and you"`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/f4/91/21/f4912174-4c34-8758-7673-60a8ce645785/00602537159048.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-08-09",
    person: "Brian",
    artist: "Jerry Garcia, David Grisman, Tony Rice",
    album: "The Pizza Tapes",
    notes: "",
    writeup: `In case you were unaware, today is the 30 year anniversary of
Jerry Garcia's death at the age of 53. I remember learning the news
while home in Charlotte for the summer before my sophomore year of
college and being genuinely devastated that the world had lost such a
legend.

There is not much more to say about why I picked this artist for today's
Saturday album. Narrowing it down to one album to pick is daunting task,
but this one has always stood out to me because it felt like we were
getting a behind the scenes peak into the recording studio at David
Grisman's house. The story behind this album is hilarious one, so look
it up if you don't know it. This album to me always felt so raw and
genuine, and it includes so many classic songs performed in a way that
only Jerry could do them. Enjoy The Pizza Tapes, by Jerry Garcia, David
Grisman and Tony Rice. I hope we can all tip one back for the GOAT while
we listen.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ea/d5/5b/ead55bd6-1c03-9f78-b585-e3c929b855b0/s05.rfwmvxis.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-08-16",
    person: "Bagley",
    artist: "Leftover Salmon",
    album: "The Nashville Sessions",
    notes: "",
    writeup: `Evening fellas. Tonight's album was one my favorite albums that
came out while I was in college. I had gotten into their previous album
my freshman year and was really getting into the hole new grass jam band
thing, so the timing was perfect. But the real impact was from the
covers on the album particularly the Waylon cover. I knew his radio hits
of course but a light bulb went off when I heard the song on this album
and the love affair began. It also introduced me to Taj Mahal and
Lucinda Williams and I have since become huge fans of both. The albums
consist of eight originals and five covers. This probably their best
overall album and comes from their peak creative writing era. Doesn't
hurt that Bela fleck, Sam bush, Jerry Douglas, John Cowan (and many
more) are on several of the songs. Incredible musicianship and really
well produced. And pretty sure you'll enjoy the guest singer on the last
song. Hope you guys enjoy Leftover Salmon's 1999 album The Nashville
Sessions.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ea/9d/52/ea9d52b6-1a61-4745-e2ee-705549e3d650/00720616214225.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-08-23",
    person: "Sean",
    artist: "Sam Cooke",
    album: "Night Beat",
    notes: "",
    writeup: `Happy Saturday crew!

It seems like forever since I got to throw an album out to the group.
Last time was a bit of a post-Philmont scramble, so I wanted to take my
time and bring something special this round.

This one's a little different. I found it a couple years ago thanks to a
super nerdy audiophile recommendation (yes, I know how that sounds), and
it's been in steady rotation ever since. It's stripped down, super
intimate, and the vocals are front and center in the best way. Like,
"chills down your spine" kind of good.

It leans into blues and gospel---sad and soulful, but still warm and
hopeful. I couldn't help but think of Brian at Sewanee this weekend.
It's got that emotional weight, but it doesn't leave you in the dark.

Now, here's your hint: you definitely know the artist. He showed up
early in our series, but this album is a totally different vibe. Think
late-night session, lights low with a good pour, just a small band and
one of the greatest voices ever doing his thing.

Bonus fun fact: The organist on this album? None other than Billy
Preston (thank you Brian for the introduction).

Alright, enough suspense...Tonight's pick is Night Beat by Sam Cooke.

Hope you dig it as much as I do.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/15/1c/a0/151ca03b-1538-197f-bed9-9eafe9f6b253/dj.zeovvcvm.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-08-30",
    person: "Casey",
    artist: "Bob Dylan",
    album: "Nashville Skyline",
    notes: "",
    writeup: `Happy Labor Day weekend and college football season, gentlemen!
I teased this artist last summer with another pick, but it is time we
officially welcome Mr. Bob Dylan to the Saturday album lineup. A
confluence of events this summer led me to this album, one I'd never
listened to before. First was watching the biopic movie, and the second
was hearing Ketch Secor use the chorus of "Girl from the North Country"
in one of his new songs. It is one of my all-time favorite Dylan songs
and leads off tonight's selection: "Nashville Skyline."

This is ole Bob's take at a country record, and you will likely only
know a couple of the songs. It's got a good pace to it though, and not
bad to start off with some accompaniment from Johnny Cash. Fun fact -
his voice will probably come across less rough than usual and he
attributes that to having stopped smoking cigarettes for a few months
beforehand. I've always noticed that on the studio version of "Lay Lady
Lay," but I never knew the back story.

This is a quick one, so I hope you enjoy these next 26 minutes of an
American legend.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/3f/1a/ad/3f1aad23-1f92-4d66-0ca7-d835c3f79b6b/dj.mtxlnrdd.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-09-06",
    person: "Jeremy",
    artist: "Nickel Creek",
    album: "Nickel Creek",
    notes: "",
    writeup: `Alright boys, let's set the scene: it's the year 2000. We've
got Napster downloads crawling along on dial-up, frosted tips on every
MTV screen, and Jeremy and his buddies high as giraffe taint listening
to this album while playing tiger woods golf on PlayStation2. While the
world was busy with boy bands and pop-punk, three baby-faced musical
prodigies dropped this self-titled debut.

It wasn't dusty porch bluegrass, it wasn't pop radio---it was something
fresh. Alison Krauss produced it and you'd swear sometimes 19 year old
Sara Watkins's sounded just like her. The lead man has continued to
create and participate in projects and is a killer mandolin player.

I'll give Brian two free fast forwards for sweet afton and the hands
song (also known as his bathtub theme song), but hope we all enjoy the
self titled debut of Nickel creek...called Nickel creek.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/9a/34/00/9a340057-109e-7a0c-aabc-3cba81e47e99/20CRGIM22676.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-09-13",
    person: "Brian",
    artist: "Dave Matthews Band",
    album: "Recently",
    notes: "",
    writeup: `Fear not, I am here! Hammered and in heaven, but here.

I am not real proud of today's pick, and I feel like I need to ask for
forgiveness ahead of time in hopes that I am not kicked out of this
elite club.

I am at my first Sewanee Parents Weekend on this side of things.

Anna had a group of her friends over to our cabin last night for a
shrimp boil and it gave me some serious flashbacks to my freshman year.

There was no band that was more popular back in 1994 and my friends and
I were absolutely obsessed with them. I don't even really enjoy their
music anymore, which is wild to me because of how into them I was for my
entire college run.

We bought this album at a concert we went to, and I think for a bit,
that was the only way you could get it, it was not sold at Record Bar or
Ernie's. We thought we were the shit for owning it. It is getting the
nod tonight because it is incredibly short and has five decent tunes on
it. Your wives will probably enjoy this much more than you will.

I apologize..... 28 short minutes.....here is Recently by Dave Matthews
Band.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/67/35/cb/6735cb3f-7b53-893f-dd2c-758b87fd92fa/078636754826.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-09-20",
    person: "Bagley",
    artist: "Taj Mahal",
    album: "The Natch’l Blues",
    notes: "",
    writeup: `Evening fellas! Gotta give full credit to my wife for tonight's
album selection. I'd heard a little bit of his stuff before I met her
but didn't know him well. We wore out this album in our early dating
days and I became a big fan. His first two albums are unreal (and I'm
sure the rest are too). I had been on the used vinyl hunt for this album
for years and finally scored it last weekend in a hipster neighborhood
in DC. And so now seems like the appropriate time to bust it out. And as
much as I love me some Leavin' Trunk, I gotta give the nod to the album
that started it all, The Natch'l Blues by Taj Mahal.

Special shout out to the song Corinna. I might name me a dog after that
song one day.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music/b1/b6/d5/mzi.etbijaeg.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-09-27",
    person: "Sean",
    artist: "Beck",
    album: "Sea Change",
    notes: "",
    writeup: `Happy Saturday fellas!!

After another day of Ryder Cup beat downs, I thought about going with
something loud and angry --- but with everything going on around here
with my wife on the mend, I ended up choosing something slower and more
melancholy. This album fits that mood perfectly.

It's one I've always loved. The songs are emotional without being
overdone, and the production is layered in a way that is always
interesting. It's a great album for headphones --- there's a lot going
on underneath the surface, and I always hear new things every time I put
this on.

What stands out most is the songwriting. The artist is known for
switching styles from album to album, but this one really focuses on the
lyrics and mood. It's not flashy, but it's powerful in a somber yet
optimistic kind of way.

I hope y'all enjoy tonight's album from an artist I'm betting you aren't
super familiar with. It's Sea Change by Beck. Enjoy!!`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b7/39/f5/b739f599-a321-9ddf-9691-6f888bd46f97/00602527874692.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-10-04",
    person: "Casey",
    artist: "Rick Danko",
    album: "Live on Breeze Hill",
    notes: "",
    writeup: `I'm not sure why this would ever happen, but if someone held a
gun to my head and made me pick my favorite artist of all time, I'd say
The Band. Great songs mixed with a lineup of powerhouse vocalists, my
personal favorite being Mr. Rick Danko.

Tonight's feature "Live on Breeze Hill" was released a few months before
his unexpected death in 1999. Along with some of his most popular
tracks, it also includes others from The Band's catalog that were
usually sung by other members. He's even joined by Garth Hudson on this,
and you'll hear the organ going strong on "Chest Fever."

I'm never a fan of skipping songs on albums, but I honestly don't think
the first song belongs at all. This is a live record, and "Sip the Wine"
is a studio cut. I once read that it was only included because it is
played in The Last Waltz when they are talking about going their
separate ways. I'll let you decide what to do, but I feel like the fun
really begins with "Twilight," a song that I've come to absolutely love
over the years.

Happy Saturday evening, gents. Enjoy!`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/42/11/ca/4211ca75-6b09-3293-2400-33183bd44bc0/687241000121.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-10-11",
    person: "Jeremy",
    artist: "Waylon Jennings",
    album: "Songbird",
    notes: "",
    writeup: `Good evening gentlemen...one other time I've introduced a brand
spanking new album I assume no one has heard (I could maybe see bagley
having listened to this one), but tonight we're doing it again after one
week in the wild.

The difference tonight is the new album is by an artist no longer with
us. He's graced us on Saturday night before but this one is with the
help of his incredibly talented son who dug back into a trove of "lost
songs" that were digitized back in 2008 to find 35 minutes of goodness
for us.

The album has some great songs, some made popular by the likes of
Fleetwood Mac, and crystal gale. But also some apparently great writers.
I think my favorite is "I'd like to love you baby" by JJ Cale who wrote
after midnight and cocaine for Eric Clapton. To me it's got a vibe
verrry much like Scooter Blues. I could hear Sturgill singing it.

So enough with the mystery. Hope you enjoy this new album by Mr. Wayon
Jennings called "Songbird" brought to us thanks to some great work by
Shooter.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/51/11/20/51112027-0f67-f1ee-d52c-237c06fa83ed/199350733765.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-10-18",
    person: "Brian",
    artist: "Widespread Panic",
    album: "Ain’t Life Grand",
    notes: "",
    writeup: `Evening Folks,

Congrats on reaching this amazing milestone!

When I found out it was going to be my weekend to curate, I knew right
away that it had to be a Panic album.

Impossible decision.

Do I go with the first album I got of theirs? (Space Wrangler)

Do I go with my current favorite? (Uber Cobra)

Do I switch it up and we listen to a full show this week instead of a
traditional album? (Looked into some 1996 Sit and Ski acoustic shows)

Do I think outside the box and build my own playlist on YouTube and we
listen/watch a greatest hits compilation? (seemed too far outside the
box and not really an "album")

I have been all over the place with this pick for a couple of months
now, and really did not want to disappoint on this monumental occasion.

I ended up going with the one I listened to almost daily my freshman
year of college, which includes some of my favorite tunes of all-time.

ChatGPT describes how it fits in with all of our previous selections in
this way:

"Sonically it bridges your recent Americana run (Waylon, Rick Danko,
Jerry Jeff) with the funkier edge of older picks like The Meters and
Galactic.

It's vibe is confident, earthy, and classic Panic without being too
sprawling."

Before you listen, humor yourself by watching this performance on
youtube. Once you are done marveling at how young they look, and Mikey
shredding it from a standing position, please spend the rest of the
video focused on the horns section, particularly the fedora wearing
trumpet player. He alone will make you so happy.

https://youtu.be/wON3PgZdmL4

After the video, enjoy us hitting the century mark by enjoying some old
school, classic WSMFP with a little Ain't Life Grand.

Happy 100th!`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d1/9a/6f/d19a6f03-5c2d-da70-15e1-15fa2525132c/mzi.rlhewoux.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-10-25",
    person: "Bagley",
    artist: "Rush",
    album: "Farewell to Kings",
    notes: "",
    writeup: `Hide ya kids! Hide ya wife! You knew this day would come
eventually. With the recent shocking announcement that they will go on
tour next year (a day no fan thought would ever happen again), I am
forced with no other option than to put the mastery of Rush upon you.
And with Geddy's beloved Blue Jays not just in the WS, but destroying
the hated dodgers last night, there will never be a better time.

I chose the least hella gay album I could think of...A Farewell to Kings
from 1977. Also, it is my favorite album (ok that's the real reason).

This might be a Monday, close your office door type listen, so your
coworkers don't look at you with confused side eye. Rush is definitely
kind of a love em or hate em band, which I totally get, and many (most?)
find Geddy's voice grating (fair point). Obviously, I am not one of
those, and have been a hardcore fan since I was 15. I ran into an old
high school acquaintance one day and we were talking and he was like,
are you still a huge Rush fan? Apparently I always made it known. There
are very few bands that are just extremely special to you, ya know?
Like, I'm so glad those dudes crossed paths in life and decided to form
a band. Panic is one of those. Rush is another. And now I get to see
them again next November in Charlotte. Unreal.

Time to embrace your inner nerd and listen to lines like "for I have
dined on honeydew and drunk the milk of paradise." Oh yeah baby, total
chick magnet music.

If you hate it, good news, it's only 37 minutes. If you love it, and at
the end your like...More Rush! More Rush! Go over and put on the nine
minute Natural Science from the Permanent Waves album. Probably my
favorite Rush song. Enjoy!(?) 😀`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d3/04/b0/d304b074-027a-e308-1f4c-2dad0ee6efb1/12UMGIM19105.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-11-01",
    person: "Sean",
    artist: "Guns N’ Roses",
    album: "Appetite for Destruction",
    notes: "",
    writeup: `Happy Halloween weekend 🎃 yall! Was debating about going with
something scary and twisted for the theme but decided to stick with my
roots and throw a true hard rock classic your way. I guess the album
cover depicts each member as a skeleton so there's that.

Anyway, this is one of my all time favorite albums and one that I
absolutely wore the tape out on during middle school. This band became
huge but their first album is easily the best. This one is gritty, loud
with a ton of attitude and always felt a little dangerous given some of
the subject matter. Especially listening as a kid. It also has one of
the best rock ballads on the second half of the record.

So as always, turn it up and enjoy this gem from 1987. It's Guns N'
Roses, Appetite for Destruction!! 💪 n 🌹`,
    coverUrl: "https://thumb.wikimedia.org/wikipedia/en/thumb/6/60/GunsnRosesAppetiteforDestructionalbumcover.jpg/250px-GunsnRosesAppetiteforDestructionalbumcover.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
  },
  {
    date: "2025-11-08",
    person: "Casey",
    artist: "Cordovas",
    album: "That Santa Fe Channel",
    notes: "",
    writeup: `Given this afternoon's big basketball scrimmage over at South
Meck, we are going to listen to a band led by a Sabre alum. It is the
perfect reason to finally pull this one off my list. I didn't know this
fun fact until I saw these guys back in August so I reached out to
interim Head Ball Coach, Jonathan McIntyre, to see if he remembered the
front man. Not only did he remember Joe Firstman, his brother had
actually been his drummer back in high school.

I'd say that the music of Cordovas has come a good way since those days
but their fame hasn't really progressed much at all. I think these guys
are absolutely fantastic, and it blows my mind how hard a band like this
has to grind just to get to play music for a living. Sean and I talk
about this all the time; a successful tour for them is probably making
just enough money to pay for the trip.

I also know there is possibly a cocktail hour live listen for the
Kirby's/Bagley's and wanted to set a good vibe for that. This one will
deliver for sure. Please enjoy That Santa Fe Channel by Cordovas.
Cheers.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b2/17/62/b2176252-d304-95a9-f0ad-12c8eafcc5b4/Cordovas_Cover-web.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-11-15",
    person: "Jeremy",
    artist: "Guy Clark",
    album: "Old No. 1",
    notes: "",
    writeup: `Man did I almost have a mess up tonight...I had Pearl Jam "Ten"
teed up and looked back at the list for a reference on 90's rock and
damn if it wasn't there...so a pivot is here, but one I've had on the
list when we need to show reverence to the Americana we know and love.
The mention of the Todd Snider passing today locked it in...

Tonight we're spinning one of the gentlemen that helped launch this
genre and has been referenced as an influence to many. This record from
1975 landed right in the middle of Prine and the rage of outlaw country.

Not the most upbeat album but I could listen to LA Freeway 1000 times
and it's been covered by a number of the SAC series artists (including
Todd Snider). When I did a little fun fact research (he actually built
guitars and the album cover was just a random picture in front of his
workshop) about every damn Americana artist on our list referenced him
as an influence.

This is the album that taught songwriters how to write songs. Hope you
enjoy the quick 36 minute listen of Guy Clark Jr.'s "Old #1"`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/06/a9/26/06a92632-6ffa-41c6-653f-7d9f93b41596/dj.nrgqyvfj.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-11-22",
    person: "Bagley",
    artist: "Alice In Chains",
    album: "Unplugged",
    notes: "",
    writeup: `Evening fellas! And good luck tonight Brian!

Tonight's album is a deserted island album for me. And in my not so
humble opinion, the greatest of the bunch in the MTV Unplugged series.

Definitely the least popular of the "big four" Seattle grunge bands. So
of course the contrarian in me says they are the best of the four!

I will say I do think they had the best guitarist of the Seattle bunch.
I've come to really appreciate Jerry Cantrell over the years.
Unfortunately, the band's career got cutoff by Layne's crushing heroine
addiction. Luckily we got this gem out of the boys before he departed
Earth.

Hope y'all enjoy Alice In Chains Unplugged from 1996.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music/ff/eb/d8/mzi.wegmszqt.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-11-29",
    person: "Brian",
    artist: "Jimmy Cliff",
    album: "Best of Jimmy Cliff",
    notes: "",
    writeup: `I would like to again thank Mr. Bagley for switching up with me
last week. It was a perfect album selection for the two year
anniversary. For tonight, we are going in a different direction and we
are going to pay tribute to an influential musician that passed away
earlier this week. Many of his songs have been covered by some of my
favorite artists, like Widespread Panic and Jerry Garcia. Enjoy some
"spiritually uplifting, socially conscious, and emotionally soulful
reggae" from Mr. Jimmy Cliff. RIP!`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ef/e8/b7/efe8b7b1-0c47-0ec3-2e8c-5df05f4dd20c/00600753771266.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-12-06",
    person: "Sean",
    artist: "Gov’t Mule",
    album: "Live From Roseland Ballroom",
    notes: "",
    writeup: `Friends seen and unseen, it\\'s time for our Saturday album
listen and boy do I have a treat for ya\\'ll!

Some albums don't just sound great---they change everything. This one
pulled me out of the metal and grunge scene and dropped me into a world
of improv blues and jam bands. The opener is nearly twenty minutes of
pure fire, building to a moment so iconic that someone in the crowd
literally screams when the familiar cover notes hit around the 12:30
mark. From start to finish, it's a showcase of raw chemistry and
musicianship that few bands ever achieve. Warren Haynes' soaring guitar
tone and gritty, soulful vocals are the glue that holds it all together.

It's bittersweet knowing the original trio didn't last after the
bassist's tragic passing 25 years ago. But for me, this record remains
the turning point---the one that made me the music-loving hippie you
know today. The album? Gov't Mule -- Live at Roseland Ballroom.

Extra factoid - this was recorded NYE 1995 when they opened for Blues
Traveler. I feel bad they had to follow this killer set!!`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/95/9d/e9/959de939-d6b0-037c-25b8-c2752704ff23/5034644543482.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-12-13",
    person: "Casey",
    artist: "Reigning Sound",
    album: "Shattered",
    notes: "",
    writeup: `Tonight's selection was my number 1 listened to album of 2025
despite never having heard of the band this time a year ago. It was
introduced to me by my good friend MC Taylor (see below, go to 2:25
mark) as he was discussing his favorite albums on the Merge Records
label. I'd not re-watched his explanation of why he liked it so much
until this week, and he is spot on - this album has so many different
sounding songs on it. I especially like the fact that all songs are
2:30-3:30 minutes in length so it is fast paced and only 33 minutes
total. And the opening song is a nice nod to those of you who are
married to North Cackalacky Girls. I hope you enjoy "Shattered" by
Reigning Sound as much as I have.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/34/b9/34/34b93418-4385-b5ab-aaa1-558e3bec68e5/56653.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-12-20",
    person: "Jeremy",
    artist: "AC/DC",
    album: "Back In Black",
    notes: "",
    writeup: `I've decided to drop the album right now...while we can rock it at the
tailgate, it may be perfect for the ride in as well.

Today's pick needs no deep explanation. We're at a football tailgate, we
need energy, and this album is basically three chords of pure
adrenaline.

Back in Black is one of the loudest comebacks in rock history, and it's
built for moments like this --- big riffs, pounding drums, and songs
that sound like they were written to be played at full volume in a
parking lot before kickoff. From the opening bell of Hells Bells to the
last punch of Rock and Roll ain't noise pollution this record doesn't
let up.

I'm also glad brian found a deal and no one will be asking him "what do
you do for money honey"

We're rolling this one while cheering on them Panther Cats! Beat them
today, beat them again, and we punch our ticket to the playoffs. That's
the mindset --- confident, aggressive, and ready to make some noise.

So crack something cold, turn it up, and let Back in Black do what it
does best:

get us loud, locked in, and ready to win. 🐾🔥`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1e/14/58/1e145814-281a-58e0-3ab1-145f5d1af421/886443673441.jpg/1200x1200bb.jpg",
  },
  {
    date: "2025-12-27",
    person: "Brian",
    artist: "Blue Dogs",
    album: "Live @ The Dock St. Theater",
    notes: "",
    writeup: `I absolutely loved this album back in college, and I am betting you
and/or your spouses did as well. Tonight is actually this band's 38th
anniversary celebration and is being held in Charleston SC.

We are playing in a tournament today, so I have had limited time to put
into my writeup. Therefore, AI tells us, in the cheesy way that only AI
can do:

This live recording captures a band at ease with itself---loose,
confident, and deeply connected to its audience. The performances blend
roots rock, Southern storytelling, and jam-friendly energy, with songs
stretching and breathing in a way that studio versions never quite
allow. There's a warmth to the crowd interaction and a sense that the
music is less about perfection and more about shared experience, as if
the band and audience are in on the same inside joke. The album feels
nostalgic without trying to be, the kind of record that becomes a
soundtrack to a specific season of life---one you played constantly
during college because it felt like home. Only at the end do you realize
this snapshot in time comes from Blue Dogs Live at the Dock Street
Theater.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music/y2004/m04/d28/h10/s05.qpaktphd.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-01-03",
    person: "Bagley",
    artist: "Emma Gibbs Band",
    album: "Out to the Country",
    notes: "",
    writeup: `Good morning from Costa Rica fellas! First time here. It is pretty
freaking fantastic let me tell ya. Anyway, given the pregame activities
that are about to ensue, I decided to pivot away from my original choice
and select an album that is a little easier to listen to. Plus they are
(were) an NC band - from good ol Winston-Salem no less- so it seemed
like the right vibes for the big cats game today.

Not really sure how I ever stumbled across this band but it happened at
some point in the college era. They are definitely in the same vein as
the Blue Dogs. So we are going back to back weeks to reminisce on old
bands from the Carolinas! This is a really simple easy album to listen
to and one I love to revisit about twice a year when I'm feeling it.

Ladies and gents, I present the Emma Gibbs Band album Out to the
Country:`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music/d6/ab/0a/mzi.wbtoiaor.tif/1200x1200bb.jpg",
  },
  {
    date: "2026-01-10",
    person: "Sean",
    artist: "Bob Weir",
    album: "Ace",
    notes: "RIP",
    writeup: `Nothing else to say. RIP.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music/da/ad/e8/mzi.npanwgbt.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-01-17",
    person: "Casey",
    artist: "Traffic",
    album: "Traffic",
    notes: "",
    writeup: `Greetings from Greensboro, aka Hissmas Town USA tonight!

Tommy Shelby wasn't the only badass to come from Birmingham, England.
Although well-known, I think tonight's featured artist is one of the
more underrated bands out there. I was given an extensive introduction
to Traffic my senior year of college from my friend Haynes, usually over
numerous bong rips. They are talented musicians, have a wide range of
sounds, and a couple incredible vocalists in Dave Mason and the
legendary Steve Winwood. And don't just take it from me, some of our
favorite bands cover(ed) Traffic songs. In addition to those, the deeper
cuts are really damn good too. I'm not sure why they don't really get
their due, but it could be from their short/inconsistent time together
or the sheer quantity of music coming out of Great Britain at the same
time.

It was hard to pick one album, but I've decided to go with their
self-titled one from 1968. The original version only has ten tracks so
it wraps up with "Means to an End." If you are interested in other
records, "Low Spark..." or "John Barleycorn..." are great too. Cheers!`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/5a/7f/05/5a7f0511-c115-4654-9deb-711e5308435f/00731454649827.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-01-24",
    person: "Jeremy",
    artist: "The California Honeydrops",
    album: "Call it Home, Vol. 1",
    notes: "",
    writeup: `Had a tough time finalizing the album this week given the precariousness
of the forecast and what kind of vibe I'd be looking for. But alas,
everyone is home and settled, all prepped up and just hanging out. So
tonight I finally landed on a band I've considered a few times and a
genre change from the last few weeks. These guys literally started out
busking at Oakland subway stations and is a great vibe band. This album
feels greasy and soulful in a real new orleans feel for me. The lead
singer, Lech Wierzynski sure isn't a guy you'd expect to have a sam
cooke style voice but was a polish refugee and apparently learned to
sing from listening to records his parents smuggled into the country.

We've touched on the Meters and Taj Mahal and it feels like these dudes
may be picking up the torch and carrying it forward. Apparently the fun
fact of the night is the horns accompanying have commonly shared the
stage with Dr. John and Bonnie Raitt...Anyways...Grab a beverage and
enjoy the soulful relaxing sounds of The California Honeydrops and Call
it Home Volume 1.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/53/ff/95/53ff9539-dec0-5b23-e9f5-4e798f405ac0/197773581147_cover.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-01-31",
    person: "Brian",
    artist: "Ray Charles",
    album: "Genius Loves Company",
    notes: "",
    writeup: `A good role model and human? Not at all.

A good musician? Absolutely.

A perfect listen for a snow day? You bet your ass he is.

I love this album because it features some of his classics along with a
few fun songs you may not know, all performed with some of the most
recognizable voices of recent generations.

Enjoy the snow with the sweet sounds of Mr. Ray Charles and a few of his
friends on Genius Loves Company.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7f/62/97/7f6297c0-9286-02fd-7930-1e1ca877643f/109416.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-02-07",
    person: "Bagley",
    artist: "The Rolling Stones",
    album: "Goats Head Soup",
    notes: "Leaigh as guest picker",
    writeup: `Thanks for letting me join the party, guys. Happy to be here, I hope I
don't let you down!

So growing up, my parents were into all things Motown and country. I
knew every word to every song by the Temptations and Dolly Parton, but
no rock. In high school, I was in the chorus (soo cool) where I gained a
love of the Beatles. Like everyone with a radio, I'd heard the Rolling
Stones' hits a million times, but I never thought much of them, until
one night I was driving home from a late night study session in law
school, struggling to stay awake. I rolled all the windows down and
turned the radio all the way up just when the DJ played Beast of Burden.
Like the other hits, I had heard this song more times than I could count
but i was finally listening. I could not believe how amazingly cool and
fun it was, and I was hooked from then on. I bought Some Girls the next
day, and quickly collected the rest of their incredible albums. It's
blues, it's rock, it's punk, it's country - it's the best damn bad of
all time. It's hard to pick a favorite, but mine is Goats Head Soup, and
that's my pick of the night. Enjoy!!`,
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/d/d8/The_Rolling_Stones_-_Goats_Head_Soup.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
  },
  {
    date: "2026-02-14",
    person: "Sean",
    artist: "Radiohead",
    album: "OK Computer",
    notes: "",
    writeup: `Happy Valentine's Saturday to the crew and may your evenings be
fruitful. Unfortunately, this album may not be especially helpful in
that department... though I know a couple of wives out there will
absolutely dig it. This band has been on my radar since we kicked off
this experiment more than 100 albums ago. The challenge wasn't picking
the band, but picking when and, more importantly, which album.

A little background before the big reveal. This is one of only a handful
of bands I've made a true pilgrimage for, traveling solely to see them
live and it did not disappoint. Still one of the most mind‑blowing shows
of my life. So the question became which album to share with y'all?

I landed on one that sits perfectly between their early, rock‑forward
listenability and the "studio as instrument" sonic weirdness that would
be a huge part of their later work. The more you can focus on this one,
the better it will be. The sonic goodies don't jump out immediate but
aren't buried so deep you'll miss them. Think headphones, low light,
gummies, and things of that nature to properly set the mood.

I know I'm taking a bit of a chance with this one, but I truly think
you'll all enjoy it, and maybe even one you will listen to again and
again. Here's hoping. Enough rambling. Sit back and let the music take
you on a trip.

Tonight's album is OK Computer by Radiohead.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/07/60/ba/0760ba0f-148c-b18f-d0ff-169ee96f3af5/634904078164.png/1200x1200bb.jpg",
  },
  {
    date: "2026-02-21",
    person: "Casey",
    artist: "Fleetwood Mac",
    album: "Rumours",
    notes: "",
    writeup: `Every once in a while, following Sean in the rotation presents me with
an important responsibility: bringing us back to mainstream so that
Jeremy doesn't quit the band. That is the case tonight and informed my
decision to go with a beloved and highly regarded record. This is one of
those albums that is so full of hits that it is hard to believe they
actually did it all at the same time.

I'm not going to go into the whole back story of when Fleetwood Mac was
recording "Rumours," but I've always thought it was so cool that they
put up with all their internal drama because they knew how good the
music they were making together was. In addition to that, Lindsey
Buckingham was doing some newer stuff with the production and mixing
that was cutting edge at the time. But the highlight is the vocals of
Christine McVie and Stevie Nicks. Classic album cover too.

So listen to all of these songs anew like it is the first time you've
heard them. Welcome back, Jeremy!`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4d/13/ba/4d13bac3-d3d5-7581-2c74-034219eadf2b/081227970949.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-02-28",
    person: "Jeremy",
    artist: "Red Hot Chili Peppers",
    album: "Californication",
    notes: "",
    writeup: `Alright boys...I had a classic Americana/folk album for tonight that
I'll be saving for another week...work has been a bitch the last week or
two and I needed to go back to my 90's rock days and just rip. I had to
get my listen in yesterday because I'm headed to MJ tonight at the
blumenthal. Thought about an MJ album but could only picture Brian
telling pedo jokes.

I was back and forth on which album but went with this gem which brings
a little more melody than just straight funk-punk. It's the sound of a
band that had already blown up, nearly fallen apart, and then found
their groove again.

This album went on to sell over 15 million copies worldwide and
completely redefined the band's sound. You've got a Grammy winning song
and one where they definitely use the word Cunt-tilla (get on top). As a
lyric guy the songs are both laid back and heavy.

This one's for cruising, for nostalgia, and for remembering that
sometimes the comeback album is better than the first act (in my
opinion). Hope y'all enjoy Red Hot Chili Peppers and "Californication".
...please skip Porceline.`,
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/d/df/RedHotChiliPeppersCalifornication.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
  },
  {
    date: "2026-03-07",
    person: "Brian",
    artist: "Big Head Todd and The Monsters",
    album: "Sister Sweetly",
    notes: "",
    writeup: `Some weeks our album club dives into deep, artsy musical statements that
require reflection, discussion, and maybe a second listen.

This is not one of those weeks.

This week we're going with an album that simply shows up, plugs in, and
proceeds to absolutely groove for the next 50 minutes.

It's packed with huge riffs, road-trip vibes, and at least a couple
songs that will make you say, "Ohhh...that reminds me of my college
years."

If you suddenly find yourself nodding along, tapping the steering wheel,
or trying to hit a Mr. Todd Park Mohr guitar face in your kitchen,
that's completely normal.

This week's pick is Sister Sweetly by Big Head Todd and the Monsters.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music/30/cd/82/mzi.czhnyruj.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-03-14",
    person: "Bagley",
    artist: "Col. Bruce Hampton & The Aquarium Rescue Unit",
    album: "self titled",
    notes: "",
    writeup: `Evening fellas. I think tonight's artist is a rite of passage for us.
The first time I ever heard of the names Jimmy Herring and Oteil
Burbridge was in 1994 when I first heard this band (long before they
joined their future famous bands). It was perfect timing for this kid
who had also recently discovered Phish and Panic. I was into them
immediately. Just pure badass musicianship.

Col Bruce is an absolute legend in the Georgia jam band scene. Honestly,
probably the godfather. He mentored many of our heroes over the years.
Not just Jimmy, but Duane Trucks and Nick Johnson both played in Col
Bruce bands back in the day (hence the recruitment of Nick to fill in
for Jimmy). Full circle baby. If you don't know The Colonel's story, go
read about it, particularly the night he died on stage at his 70th
birthday bash at the Fox Theater. You couldn't make it up if you tried.

This is a live album from 1992. The intro alone is worth it (I think JB
may have had a few before he got up on stage). Panic themselves have
played the first five songs at some point in their career. I will say it
can get a little out there and in my opinion it falls off a bit after
Time Flack. If you've had enough by the time you get to Davy Crockett,
feel free to end it early. I think you've gotten the point what ARU was
all about (and if you do get that far, you can certainly skip a Walk
with Peltor as it's just a bit of noise).

Happy Saturday and I hope you enjoy a bit of Col Bruce Hampton and the
Aquarium Rescue Unit.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/5d/2f/3e/5d2f3e1a-ae5d-98f7-16d7-f1bc3478cf3d/mzi.rrqyjapy.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-03-21",
    person: "Sean",
    artist: "Band of Horses",
    album: "Cease to Begin",
    notes: "",
    writeup: `Happy Saturday, everyone --- and welcome to spring!

Tonight's pick is an easy, feel good listen. No spaced out psych rock,
no heavy metal detours. You're welcome. This one sits right in the
center lane: straight ahead rock from a Seattle formed band with roots
in South Carolina.

I first heard this album in the mid‑2000s thanks to the Bagley's (pretty
sure Leigh gets the credit). I remember the four of us packed into our
tiny condo for a weekend visit. I was curled up in a chair, eyes closed,
running a 103° fever with the flu. Even in that state, the album hit me
immediately. I loved it then, and I've been a fan ever since.

Not much more setup needed, other than to say this album just makes me
happy. It pairs perfectly with great weather and a cold drink or two. So
sit back and enjoy a quick listen --- just 35 minutes --- to the
sophomore album from Band of Horses: Cease to Begin.

Bonus for you old school NBA fans, check out the song title for track 4.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/cb/3f/9e/cb3f9e63-248d-eaaf-5806-e951f692b0fa/098787074567.png/1200x1200bb.jpg",
  },
  {
    date: "2026-03-28",
    person: "Casey",
    artist: "The Dip",
    album: "The Dip",
    notes: "",
    writeup: `A few years ago, I reluctantly joined Lindsey at the Lake Street Dive
concert. Not only were they far better than I anticipated, I fell in
love with that night's opener who is tonight's featured artist. Hailing
from Seattle, The Dip has a sound far different than what comes to mind
from the 90s. The lead singer's voice and the horns make this far more
of the panty dropper genre. They are also a great listen for the beach
which seems like a fitting sound on a clear spring evening.

It is hard to pick one album because they are all honestly very solid.
Just two weeks ago, they released a live album that is a good sampling
of their full catalog. For tonight, we'll go with their self-titled
debut.

And if you ever go see them live, be careful if you take your wife. In
addition to having a voice like Otis Redding, their front man is also a
handsome fella. I remember watching them at the Neighborhood Theater one
time and thinking about how every woman in that room was actively
thinking about wanting to have sex with him...and I completely
understood. That lucky bastard. Cheers!`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9f/ba/9e/9fba9e8a-0aca-43d9-99e6-268e2be08186/859714620864_cover.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-04-04",
    person: "Jeremy",
    artist: "Jason Isbell and The 400 Unit",
    album: "The Nashville Sound",
    notes: "",
    writeup: `I was torn on what direction to go tonight but after messing around on
the new six string, I leaned towards one of the cornerstone Americana
albums. Will be a familiar voice from a prior band selection and
possibly surprising that he has made a solo appearance.

This is one of those records that feels like the songwriter got older,
wiser, and somehow even better at saying a lot without overdoing it.
Same Southern roots and same great storytelling. It's not flashy, it's
just really well done.

To me it's the kind of album that gets better once everyone stops
talking and starts actually listening to the lyrics. And I'm determined
to nail "if we were vampires"

Tonight we're going with Jason Isabell and the 400 unit and "The
Nashville Sound"`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/75/bc/bd/75bcbd6d-02a8-251c-9548-38c3b9c5672a/886446416328.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-04-11",
    person: "Brian",
    artist: "Trigger Hippy",
    album: "Trigger Hippy",
    notes: "",
    writeup: `Hello Friends.

Happy Masters Weekend.

Some background:

I am ashamed to admit, I am not really good at listening to bands or
music that are unknown to me. I tend to listen to my favorites and know
them all pretty darn well, but I really don't venture out much beyond
them. That changed by accident a few weeks ago as we were driving home
from Spring Break. You all were all digging that new Tedeschi Trucks
album and I clicked on a link Sean had sent to this text thread listen
to some of it. I heard the first song and loved it, but about halfway
through the second song, I was curious because while it was a female
singing, it did not sound like Susan Tedeschi. I picked up my phone and
looked and realized that it was indeed not Susan Tedeschi, but rather a
band that I had never heard of but sounded pretty badass. They had
popped up on my stream once that one TTB song had concluded.

I did the natural thing, which was to then do a google search on my
phone and read it while driving 85mph down the highway.

My immediate research blew my mind. It was a collaboration band that has
been around for a while with artists that included a founding member of
the Black Crowes, a member of the Band of Heathens, Joan Osborne and
even Jimmy Herring for a short stretch. I discovered that they have only
released two albums, so I picked one and proceeded to jam down I-24 for
the next hour. Even Ali commented on how much she liked them. I have
been excited to share them with you since that accidental discovery in
mid-March all thanks to you guys.

I hope you enjoy this hard hitting southern rock album as much as I
have. Check out the self-titled album by my newest band to listen to:
Trigger Hippy.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/5a/d0/79/5ad0796b-ffc6-6863-f6f1-dc76db065d41/00888072361294.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-04-18",
    person: "Bagley",
    artist: "Ann Peebles",
    album: "Straight from the Heart",
    notes: "",
    writeup: `Happy Saturday fellas! About to head to the Mule show and get drunk with
Seancho. Nothing fancy to say about tonight's artist. I stumbled upon
her version of "I feel like breaking up somebody's home" a few months
ago. It was the first version of that song ever recorded. And then
Albert King (whose version appeared on a previous SAC selection) had his
version come out the next year. I really love this album. A quick, but
solid 26 minutes of soul jam. Hope y'all enjoy Straight from the Heart
by Ann Peebles.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/cc/25/0f/cc250faf-a9f4-7525-9925-7a296b334793/886445484793.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-04-25",
    person: "Sean",
    artist: "ZZ Top",
    album: "Tres Hombres",
    notes: "",
    writeup: `Happy Saturday good people!

We are getting back to my roots for this evenings pick. A quick and easy
listen, if not a bit greasy.

My earliest memories of this band date back to the beginning of MTV with
their entertaining videos, especially for a young and impressionable
boy. Their sound at the time leaned in to the trends of the 80's -
synthesizers and polished production. However, the music still kicked
ass. I think this band, even though I didn't realize it at the time, is
why I have always gravitated to power trios like the original Hendrix
Experience, Cream, Rush and my favorite Gov't Mule.

So let's hop in the way back machine and go to the dusty outskirts of
Texas in 1973. This album is where the band solidified its southern rock
and blues boogie sound. I hope y'all enjoy a true classic from that
little ol band from Texas, I give you ZZ Topp - Tres Hombres.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/19/4d/3c/194d3c17-7a21-5622-0939-16feb62b6b07/0603497921430.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-05-02",
    person: "Casey",
    artist: "Cymande",
    album: "Cymande",
    notes: "",
    writeup: `Happy JazzFest, gentlemen. I'm down here visiting my best friend from
college, and a couple weeks ago, I enlisted him as tonight's guest
curator. He sent me seven records to narrow down, and last night we
collectively made the final decision (the other finalists are now on my
bench). So consider this the first edition of Plummy's Pick of the
Week...

Last year, Plummer and Danielle were at the MMJ One Big Holiday event in
Florida, and his favorite song from one night was something he'd never
heard. Quick research revealed that it was a cover of a British funk
band from the 70's, and a deeper dive led him to this awesome record.
Pretty sure nobody has heard of Cymande or their self-titled album, but
I've quickly become a fan and think you will too.

To close, the end of MC Taylor's email for the new Hiss record release
yesterday hit at a perfect time. Great way to summarize this trip I'm on
and the Saturday Series. Music fuckin' rules.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/6c/bb/83/6cbb8378-6b01-4aeb-e5db-32c081231bca/0720841302506_Cover.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-05-09",
    person: "Jeremy",
    artist: "Leon Bridges",
    album: "Coming Home",
    notes: "",
    writeup: `Abbreviated write up tonight from camp and virtual doctor visit from
some gnarly bite Molly got...thanks chat gpt

BUT...the other week something was on and Lydia asked what genre I would

Consider it and i said soul. She said she'd like to have more of that
playing in the house. I immediately thought of this album which was one
that came out at the beginning of the trinity brother hood and was yet
another commonality that helped build that bond. He's definitely
progressed his style but this classic still stands strong.

After writing that,screw chat gpt's write up and enjoy Leon Bridges
"coming home"`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/27/37/70/273770eb-92ac-1d00-87e6-e0f5ec0e97ab/886445452204.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-05-16",
    person: "Brian",
    artist: "J and The Causeways",
    album: "Live at Tipitina’s",
    notes: "",
    writeup: `Happy Moving Day at The PGA...\\...

A neighbor turned me onto these guys after he saw them open for The
502's out at the Whitewater Center in late April. As I dug deeper, I
found out that they had a live recording of a show from Tipitina's and
they are regulars at Jazzfest. So,

in light of Casey's recent journey, it all just made sense that they
should be my album choice this week. I don't know much about them, but I
dig their sound. Enjoy some horns and funky grooves while you cook
dinner from J and the Causeways.

P.S.- If you want to make it a drinking game, chug every time the lead
singer shouts out "Tipitina's, how you feeling??!!"`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/41/6d/8a/416d8a01-77f4-1362-ec84-9e2fec89dfbf/1963624049079_cover.png/1200x1200bb.jpg",
  },
  {
    date: "2026-05-23",
    person: "Bagley",
    artist: "The Byrds",
    album: "Sweetheart of the Rodeo",
    notes: "",
    writeup: `Happy Memorial Day weekend fellas. I'm live from Carolina Beach. We're
going way back to 1968 today and doing some country, a genre I am quite
fond of. Really more like country rock I guess. This album is considered
one of the most important albums that helped launch country rock into
popularity. The band had just kicked David Crosby out and recruited a 21
year old named Gram Parsons to join the band (incidentally Gram left the
band before the album was even released, became good friends with Keith
Richards, and legend has it he was a big reason for the country sound
that the Stones explored in the late 60s and early 70s).

They proceeded to record this album, pissing off about everyone in the
process. It was a sharp turn from their previous folky psychedelic sound
and it alienated their fan base. They also pissed off the Nashville
crowd, so much so that when they played the Opry at the Ryman while
recording this album, they were booed and ultimately banned from the
Opry for not following convention properly. Gotta love some rebels.

Thai album is a swift 32 minutes and includes lots of covers. Two from
Dylan and others from William Bell, Woody Guthrie, Merle Haggard, and
the Louvin Brothers.

This album has meant a lot to me for a while and has been on my list for
a while. Hope you guys enjoy Sweetheart of the Rodeo from The Byrds.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/79/42/10/794210be-d806-fa68-6ea5-d180039534b1/mzi.jqkgrcxk.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-05-30",
    person: "Sean",
    artist: "American Aquarium",
    album: "Live at Red Rocks",
    notes: "",
    writeup: `Happy Saturday, good people!

Tonight we're diving into a band I spent years not fully connecting
with. I'd hear their name, hear a song or two, and think, "Yeah, they're
solid," but nothing ever really grabbed me.

Then I saw them live (with Anne Mar, Bagley and Leigh) and everything
changed. They had already started their set and within seconds I was
hooked. Pure rock n roll!

Some bands sound great on a record. This one doesn't fully make sense
until you're standing in front of them. The energy, the grit and the
storytelling that hits like a gut punch... it all snapped into place
that night. Suddenly the songs I'd shrugged off felt like they were
aimed straight at me.

A lot of that comes from the frontman. He's a loud and proud NC State
Wolfpack guy and one of the most brutally honest songwriters out there.
He has a reputation (one he embraces) for writing lyrics that make grown
men cry. Not because they're sad for the sake of it, but because he says
the things most of us carry quietly deep inside.

So tonight's pick captures all of that: the raw emotion, the crowd
feeding the band, the band firing it right back. It's the moment like
this where the group finally clicked for me. Settle in, grab a drink,
crank it up and enjoy this week's album: American Aquarium --- Live at
Red Rocks.`,
    coverUrl: "https://f4.bcbits.com/img/a2949907278_1x1_700.avif",
  },
  {
    date: "2026-06-06",
    person: "Casey",
    artist: "Lowell George",
    album: "Thanks I’ll Eat it Here",
    notes: "",
    writeup: `First off, I'd like to nominate tonight's album for best title in the
Saturday series: "Thanks, I'll Eat It Here" by Lowell George. Outside of
knowing him as the lead guy for Little Feat, I didn't know much about
ole Lowell until recently when another text thread led me to do some
research - fascinating guy and musical path. And that research led me to
this solo album that was released just 4 months before his overdose
death in 1979 at the young age of 34.

It makes total sense that he was very into black blues musicians, but I
had no idea he was so involved with Frank Zappa out in LA. He even
played in the Mothers of Invention for a while which had to be impactful
and most likely very weird. Another feather in his cap is being the
producer of the Dead's "Shakedown Street" album, which has its own
special sound. And, of course, there is Little Feat's catalog. Bottom
line, the guy is a badass with some serious pipes.

This is a nice quick listen right at about 30 minutes that is made up
mainly of covers, two by SAC alums (Toussaint & Peebles). He sprinkles
in some Little Feat (Two Trains), and there are a couple different
sounding songs that stand out and are fun in their own right. And did I
mention the horns? Lots of them. Apparently the group of studio
musicians he assembled for this was second to none.

I hope you guys enjoy this one as much as I do. It'll be in my rotation
for years to come.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ad/da/2e/adda2e06-ccc5-39a8-6090-87137008c7e0/mzi.oabxypij.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-06-13",
    person: "Jeremy",
    artist: "Sturgill Simpson",
    album: "Cuttin’ Grass - Vol. 1",
    notes: "",
    writeup: `You can thank Casey for tonight's rec. I was headed in one direction but
some info he shared earlier this week caused a pivot.

Sequels are risky business.

For every "The Godfather Part II", there are ten forgettable follow-ups
that make you wonder why someone messed with a good thing. Musicians
face the same challenge when they revisit old material. Sometimes it
feels inspired. Other times it feels like a cash grab dressed up as
nostalgia.

With Casey's sharing of a new album release (finally) I ripped through
it a few times, enjoyed it and then went back to yesteryear when this
artist couldn't miss.

Whether they were actually blue grass songs recorded as country/rock as
he claimed or country/rock that he then recorded as bluegrass, it was
damn refreshing and impressive, especially in the heart of Covid.

But from my perspective Cuttin' Grass doesn't feel like a sequel. It
feels like a homecoming. The result is one of the rare musical do-overs
that actually gives an amazing angle on the original. The picking is
ridiculous, the harmonies are tight, and the whole album sounds like a
group of musicians having the time of their lives.

Tonight's album is proof that sometimes the sequel works. So here's to
Sturgill and "Cuttin Grass Vol 1"`,
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/6/60/Sturgill_butcher.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
  },
  {
    date: "2026-06-20",
    person: "Brian",
    artist: "The Big Chill",
    album: "Soundtrack",
    notes: "",
    writeup: `As our crew gathers this week at Bald Head Island to celebrate Mom's
80th birthday and spend time with family, this week's album feels
especially appropriate. It needs to satisfy a diverse listening audience
and fit the vibe of a crew that has been drinking all day, some as early
as 10am. It also reminds me of family car trips and our Dad blasting it
through the cassette deck, so a fun way to remember him on this trip.

I had a huge swing and miss with the Stand By Me soundtrack I offered as
my initial SAC selection. However, I am not one to easily be deterred,
so I am trying again.

This particular soundtrack is filled with timeless songs about
friendship, memories, and the people who share life's journey with us.

Like a great family vacation, it's warm, nostalgic, fun, and guaranteed
to spark a few stories along the way.

This week's pick is The Big Chill Soundtrack.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/9f/e7/f9/9fe7f9f4-ba2f-b369-707f-76899faf1f2c/06UMGIM07593.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-06-27",
    person: "Bagley",
    artist: "Professor Longhair",
    album: "Live On The Queen Mary",
    notes: "",
    writeup: `Evening folks! After being down here in the Big Easy the last couple
days, probably not a big shocker that I'm doing an NO artist tonight.
Having already done the Meters and Galactic, I'm forced to find another
one. Luckily that's not a difficult thing to achieve given the music
history here. I really didn't know much at all, if anything, about
tonight's artist until the last few weeks. But I've been exploring a few
albums and really came to enjoy this particular album, which was
recorded on the Queen Mary during a huge star studded party being thrown
by Paul McCartney in 1975 (incidentally the Meters also have a live
recording from this very same night).

This one will hopefully make you want to make your favorite cocktail and
sit back and nod your head for 34 minutes. Hope y'all enjoy some jams
from the man that inspired the name for the club Tipitina's, and is
honored there with a bust and a mural, Professor Longhair, and his album
Live on the Queen Mary.


As our crew gathers this week at Bald Head Island to celebrate Mom's
80th birthday and spend time with family, this week's album feels
especially appropriate. It needs to satisfy a diverse listening audience
and fit the vibe of a crew that has been drinking all day, some as early
as 10am. It also reminds me of family car trips and our Dad blasting it
through the cassette deck, so a fun way to remember him on this trip.

I had a huge swing and miss with the Stand By Me soundtrack I offered as
my initial SAC selection. However, I am not one to easily be deterred,
so I am trying again.

This particular soundtrack is filled with timeless songs about
friendship, memories, and the people who share life's journey with us.

Like a great family vacation, it's warm, nostalgic, fun, and guaranteed
to spark a few stories along the way.

This week's pick is The Big Chill Soundtrack.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/6d/8a/e0/6d8ae091-88b8-f32e-6a7c-c7586ba2a4e3/00602577284953.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-07-04",
    person: "Sean",
    artist: "The Grateful Dead",
    album: "Crimson, White & Indigo",
    notes: "🇺🇸🗽🎇",
    writeup: `Happy Fourth, everyone. I know most of us are going to be scattered
today (grilling, traveling, hanging by the pool, trying to stay cool and
watching fireworks). Not exactly the ideal setup for our usual 6pm sit
down listen.

If we're going to mark a moment this big, it made sense to go with a
band that reflects America in a way few others do. They're a living,
breathing cross section of the country's musical DNA. Folk, blues,
country, jazz, soul, psychedelia, improvisation, tradition, rebellion...
all of it swirling together into something that somehow feels both
deeply familiar and completely unpredictable. They built a community,
created a culture, and spent decades traveling the country stitching
together thousands of nights of music into one long, uniquely American
story. In a lot of ways, they embody the best parts of our great nation
messy, individualistic, unpredictable, and capable of moments that feel
downright transcendent.

And since this year's July 4th isn't just any July 4th, it's the 250th
anniversary of the country, I wanted to pick something that connects
directly to the day itself. And it just so happens that the selection I
landed on was recorded just after the 4th in Philadelphia, the city
where the Declaration was signed and the whole American experiment
officially kicked off. Felt like the right kind of way to connect this
band to this day. And why not say the hell with our usual one hour
limit? It's the semiquincentennial. We need to go all out.

So I give you this week's album: Grateful Dead --- Crimson, White &
Indigo: July 7th 1989, JFK Stadium, Philadelphia, PA.

Put it on whenever you have time today and remember to "wave that flag,
wave it wide and high"! (Even though US Blues isn't in the set)`,
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/6/6f/Grateful_Dead_-_Crimson_White_%26_Indigo.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
  },
  {
    date: "2026-07-11",
    person: "Casey",
    artist: "The Velvet Underground",
    album: "Loaded",
    notes: "",
    writeup: `Tonight's selection came about by a pretty funny series of events a
month ago. I had a buddy need to submit the name of his favorite poet
before attending a wedding and he half-jokingly said Lou Reed. Hearing
about this made me want to take a deeper dive into The Velvet
Underground. I decided to grill burgers that week and listen to a record
of theirs while out on the deck. Before leaving work that day, I was
calling a donor that I know relatively well and this activity came up.
He asked what band I was going to listen to, and I was prepared for him
to not know The Velvet Underground. Well, the opposite occurred. He got
so damn excited and said I needed to listen to "Loaded." I took his rec
and here we are tonight.

I enjoyed this on my first listen. Songs like "Sweet Jane" and "Rock &
Roll" were familiar and stuck out, but when I got to the final track I
knew this warranted inclusion in this esteemed series. "Oh! Sweet
Nuthin'" is my favorite new (to me) song of 2026. It is a helluva
closer.

Apparently, Lou Reed left the band a few months after this album was
released. I've always heard he was a complete dick. But a really
talented one. The version of this I've been listening to has some
outtakes, but OSN is the final song. Happy listening!`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/87/7d/5e/877d5e8d-8aff-717f-576c-f237ee8d7a34/603497884575.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-07-18",
    person: "Jeremy",
    artist: "Stevie Wonder",
    album: "Innervisions",
    notes: "",
    writeup: `I was all over the map genre wise leading up to this weeks pick. The
pick tonight came to mind last weekend at my grandfathers funeral going
through their old record collection and while I was back and forth, I
took it as a sign last night when country opener Muscadine Bloodline
randomly did a cover of this artist.

It came from an artist who was only 23 years old, yet had enough
confidence---and talent---to play nearly every instrument himself in the
recording of this album. He crafted an album that seamlessly blends
funk, soul, jazz, gospel, pop, and social commentary into something
thats a great listen 50 years later.

The album would go on to win Album of the Year at the Grammys, and just
days after its release, its creator survived a devastating car accident
that left him in a coma for several days. Thankfully, he recovered---and
the music he would continue to make became part of American musical
history.

One of the album's signature tracks, "Higher Ground," found a whole new
audience years later when the Red Hot Chili Peppers---a previous
Saturday Album Series selection---turned it into one of the defining
covers of the late '80s. It's a great reminder that truly great songs
don't belong to one genre or one generation.

Hope you enjoy tonight's album from Mr. Stevie Wonder and Innervisions.

Fun Fact: Stevie named the first song after Harb.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ff/c2/5f/ffc25f04-cb3b-b56e-dd28-8b77ae63e613/00602537070824.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-07-25",
    person: "Brian",
    artist: "Breakfield",
    album: "self-titled",
    notes: "",
    writeup: `This evening, we are trying out a new album that was just released a few
weeks ago.

This band was formed back in 2011 when these young men were still in
high school in Nashville TN. Several of them then attended Sewanee and
the band kept playing music together while in college. Originally, they
went by the name Boy Named Banjo. I am a fan of a few of their songs
that I have heard over the years.

They recently rebranded and now go by the new name of Breakfield, a nod
to a road at Sewanee.

Anyways, figured we could all give it a listen and see what we think of
their newest album. I have only listened to two of the songs, so it will
be a virgin voyage for all of us.

Hopefully we enjoy Breakfield by Breakfield.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b0/18/e5/b018e5b6-dbb7-64f0-dce6-5acb57ca957a/25CRGIM52135.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-08-01",
    person: "Bagley",
    artist: "Hard Working Americans",
    album: "self-titled",
    notes: "",
    writeup: `Happy Saturday fellas. Tonight we have one my favorite supergroups to
ever assemble. Unfortunately they were cut short by a couple band member
deaths and probably won't record again. But we still have a couple
albums, my favorite being their debut which consists entirely of covers,
of which I was only familiar with three prior to this album.

It's one of those albums I liked immediately. Stellar musicianship and
perfectly produced. In particular I love wrecking ball, one of my
favorite Gillian Welch songs. Hope y'all enjoy the debut self titled
album from the Hard Working Americans.

Side note - this was released a few months before Duane Trucks began
filling in for Todd nance for WSMFP, of course eventually becoming a
permanent member. Dave must've enjoyed the vibes during the HWA
sessions!

And happy bday Jerry!`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c4/82/a0/c482a015-6ec5-d8e1-726e-89a090b57dd5/886444328630.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-08-08",
    person: "Sean",
    artist: "Van Halen",
    album: "Van Halen I",
    notes: "",
    writeup: `Happy Saturday Good People! Tonight's album is one that has been on my
list from the start. This album goes back a long time, ever since I
grabbed the CD at Tower Records back in 1989. It runs a quick thirty
five minutes, but it feels like every second is packed with purpose.
Nothing drags, nothing feels like filler. It is just pure hard rock from
the jump.

People always talk about the guitarist on this record for the solos, and
sure, those solos changed the entire direction of rock guitar and his
influence is still felt today. But what keeps pulling me back is his
rhythm playing. It has this groove and punch that makes the whole band
feel alive. There is a looseness to it, but at the same time it is
unbelievably tight. It is the kind of rhythm work that gives the songs
their attitude and makes the whole album focused on his parts.

And the opening! I still think it might be the coolest start to any
album. It does not ease you in. It hits you right away and lets you know
you are about to hear something different. Even now, all these years
later, that first moment still feels electric.

This one has always been one of my favorites. It shaped what rock
sounded like for years and it still feels fresh every time I put it on.
So I hope you enjoy tonight's pick, the self titled first album from
none other than Van Halen.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/7a/ef/88/7aef88ad-25aa-be91-eb78-8917c3f114f7/603497894130.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-08-15",
    person: "Casey",
    artist: "The Replacements",
    album: "All Shook Down",
    notes: "",
    writeup: `This weekend, Brian and I are with our sister and spouses staying in the
North Myrtle Beach condo unit that we grew up coming to as kids. Given
this stroll down memory lane, there are so many directions I could have
gone with today's album. I considered many.

As the youngest of three, I had earlier access to good music than most
of my peers. I was in 3rd or 4th grade when Amy was a senior in high
school so I started listening to The Who on the ride to school regularly
when I was like 9. I know and love so much REM because of her. She
introduced me to the Dead in 8th grade. Amy and Gordon took me to a Dead
show in 11th grade. I got to see Jerry live because of them. And also
because of her, Brian and I got into Dave Matthews like 8-12 months
before our peers started talking about them. And then Brian and I have
gone to so many Panic shows together. We also have common college music
experiences so we love the Allman Brothers, New Orleans music, and
bluegrass. And Gordon and I communicate regularly about music from ages
past to our modern day man crushes on MC Taylor. We have a blast
watching live music together, and he wants in for WSP New Years if it
comes to fruition. Again, so many directions this could go.

This weekend calls for some hand me down music. I settled on something
from what I remember as some peak, momentous family beach trips down
here. I'm thinking of right around 1990 when Amy was in college and
Brian and I were about 14/15 and 12/13. This was definitely one we
learned from Amy with a likely Gordon recommendation. These guys were
one of the most well known college bands of the 80s, but substance abuse
ended their run early. I remember having a dubbed copy of this album
that I loved from the first time I heard it. Sounds exactly like that
time and still holds up well. I give you "All Shook Down" by The
Replacements.`,
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Replacements_-_All_Shook_Down_cover.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
  },
  {
    date: "2026-08-22",
    person: "Jeremy",
    artist: "Sammy Kershaw",
    album: "Politics, Religion and Her",
    notes: "",
    writeup: `Last week’s pick from Casey got me thinking about the ’90s, and it made me realize there’s a pretty significant hole in our Saturday Album Series. One that probably represents the bulk of my music catalog. 

For me, the 90’s was a turning point. I spent a lot of my teenage years buried in ’90s alternative, and then somewhere along the way I heard George Strait’s Blue Clear Sky. That song—and that album—somehow snapped me out of it and started what has turned into a decades-long love affair with country music.

But tonight isn’t George Strait.

I wanted to go a little deeper into that ’90s country world, and I wanted something with a little less slow tear jerkers. This album opens with what I’d consider the top five most singable party country songs of all time. Followed by the top charting single from this album that is still beltable. 

And that’s really why I picked this one. It’s not necessarily the most obvious or critically acclaimed album from the era, but it captures a version of country music that was everywhere when we were growing up—and one that I think we’ve largely skipped over in this series.

So, Casey got us thinking about the ’90s.

Tonight, we’re finally giving the decade its proper country treatment.

Hope yall enjoy Sammy Kershaw — Politics, Religion and Her. (Also a great song on the album)`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/06/d9/32/06d93285-75da-0a3b-7125-b3e860bfe9d6/00731452889324.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-08-29",
    person: "Brian",
    artist: "Dolly Parton",
    album: "The Complete Trio Collection",
    notes: "",
    writeup: `About a month ago, I was watching a CNN documentary on Linda Ronstadt and I decided to add her name to my list of potentials for our Saturday Album Club.  Later in the documentary, I learned that Linda, Dolly and Emmylou had done a couple of albums together, and Emmylou was already on my list of potentials. Their album was then added to my list as well, as that is an All-Star trio.  

Then, earlier this week, Dolly passes and it seems like the obvious choice to select as a tribute to her amazing voice and life.  I particularly love the cover they do of Neil Young’s “After the Gold Rush”.  

RIP Dolly.  Thanks for living a life that made a positive impact on this world.

(This is a compilation of their music and runs over 2 hours, so feel free to skip around and enjoy the ones that you prefer.  They are all pretty damn enjoyable.)

(Fun side note: SAC alum, Ry Cooder, is also interviewed in the Linda Ronstadt documentary.  It is worth checking out.)`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/8f/87/83/8f87832f-ef4b-df37-a2ba-8ebd5717731e/dj.peajpyvb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-09-05",
    person: "Bagley",
    artist: "Brute",
    album: "Co-balt",
    notes: "",
    writeup: `Evening gents. For my second SAC pick in a row, we will have Mr Schools featured on bass. But this time he will be joined by the rest of the classic Panic lineup. Tonight we will hear the second album from the side project they did with Vic Chesnutt, released just four months before we lost the great Mikey. This second album is much stronger, in my opinion, than the debut they did several years prior to this one. You’ll recognize the classic Panic sound from the first note of the first song. 
All songs were written by Vic, and let’s just say some of his lyrics are, um, interesting. In particular, All Kinds has some unique lyrics. You may want to turn that one down if your significant other is nearby.
Hope y’all enjoy another great Athens, GA band, brute., and their final album Co-Balt.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music/03/9a/19/mzi.aqbkvydo.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-09-12",
    person: "Sean",
    artist: "Isaac Hayes",
    album: "Hot Buttered Soul",
    notes: "",
    writeup: `Happy Saturday, good people. Settle in for something a little
different tonight.

This pick is one of those albums that feels both iconic and strangely
under the radar. It comes from an artist everyone knows, but you may
not have really listened to him, at least that was my experience. Even
though it came out in 1969, I did not stumble onto it until recently.
Maybe it was the cover, maybe the title, maybe just a feeling I had.
Whatever it was, I was drawn in immediately as soon as I hit play.

It is a defining soul record, but it does not stay in one genre. The
opening track has guitar work that leans straight into rock territory.
The arrangements stretch out into psychedelia with four songs spanning
forty five minutes. And of course there is a big heaping dose of
greasy funk on the second track.

It is also an album that rewards patience. The final track runs
eighteen minutes and features a long spoken monologue that sets up a
climactic emotional payoff. The whole thing floats on a single droning
organ note and a hypnotic repeating bass line that seems like it will
go on forever until it does not, and the song somehow gets bigger.
Hang in there. It is absolutely worth it.

So tonight, settle in and enjoy a record you might know about without
really knowing. It is soulful, it is funky, it is bold, and it is one
of the most fascinating pivots in late sixties music.

This week’s album: Isaac Hayes — Hot Buttered Soul.`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/63/08/65/630865dc-ee73-cb3e-c3b3-6e0d27d06789/00888072013339.rgb.jpg/1200x1200bb.jpg",
  },
  {
    date: "2026-09-19",
    person: "Casey",
    artist: "John Craigie",
    album: "Greatest Hits...Just Kidding...Live - No Hits",
    notes: "",
    writeup: `Knowing that everyone is scattered this weekend and likely not listening tonight, I have opted for a record that is perfect for the road trip home. This gentleman caught my ear a few years back and was my most listened to artist of 2024. When I began researching him, I quickly understood why as he has been described as “the lovechild of John Prine and Mitch Hedberg with a vagabond troubadour edge.” Yup, that’s right up my alley.

  His studio albums are great, but to fully appreciate John Craigie, his live records are a must because his storytelling is so compelling and usually funny as hell. He’s very self-deprecating, but many current artists revere his songwriting ability.

  This set is slightly over 60 minutes, but I figured it was fine since you all will be captive audiences on your drive. Plus, the baseball story that wraps it all up at the end is so good and worth the extra time. Consider it your Sunday sermon since you didn’t go to church. I give you John Craigie’s “Greatest Hits…Just Kidding…Live-No Hits.”`,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/74/83/88/74838875-4455-cd85-f1a9-b63e0e839e05/24565.jpg/1200x1200bb.jpg",
  }
];
