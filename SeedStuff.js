const Moniker = require("moniker");
const { Robot } = require("./server/db");

const names = [
  {
    objectId: "dWLjiHtFaU",
    Name: "Abram",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "XL5xKfMVkk",
    Name: "Aarav",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "FOdQrD9sV5",
    Name: "Abbey",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "3Dx0XOu0qb",
    Name: "Abby",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "ybVWxVr9MA",
    Name: "Adella",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "iGZpoDJqh3",
    Name: "Abie",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "UViMKprMl4",
    Name: "Adalynn",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "kGJBUjD6wB",
    Name: "Abbigail",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "AOdu7jOTMl",
    Name: "Addie",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "njZ78KJ9tj",
    Name: "Adrain",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "LQiKJCTuST",
    Name: "Aaliyah",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "Mf9sEl5EPF",
    Name: "Aaden",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "32pVKCd9a2",
    Name: "Addisyn",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "9Oe06vDprh",
    Name: "Adin",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "ooEEreHGVH",
    Name: "Abigail",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "DW8pQlODlv",
    Name: "Adelle",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "G6cU49cYSE",
    Name: "Adilene",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "6kvDmmSnk9",
    Name: "Abb",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "hIcdUOus7h",
    Name: "Ada",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "idKiwgHKik",
    Name: "Abdul",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "pW9MMCnKZi",
    Name: "Adam",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "t8JLs23tbH",
    Name: "Adelia",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "baiSoeQpP6",
    Name: "Adolfo",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "mRXKeunyc3",
    Name: "Abigale",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "zOVMPb4Ygr",
    Name: "Abdullah",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "neC0vYapch",
    Name: "Adda",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "cdlE4sF7My",
    Name: "Adriane",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "WXZMMzY770",
    Name: "Acy",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "zji7xxjUvT",
    Name: "Aden",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "fKzorDOeQM",
    Name: "Aaron",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "Eh2mtEWmqc",
    Name: "Aditya",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "l3KVfCI1FD",
    Name: "Aedan",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "ue9J6DAY8P",
    Name: "Abel",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "apR0g88WxN",
    Name: "Adelina",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "53T8ReBUg8",
    Name: "Abraham",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "gCWHWTgN2V",
    Name: "Add",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "MhW7Qj9mF3",
    Name: "Adonis",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "AMWy5sjyPZ",
    Name: "Abril",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "LAFnIkKN58",
    Name: "Abdiel",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "h4lDoWBb8U",
    Name: "Adrian",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "mR7HbIfj4c",
    Name: "Adriel",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "C9VHkxuDr6",
    Name: "Abelardo",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "KzJTdBMoH9",
    Name: "Abigayle",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "grYbppoYNu",
    Name: "Acie",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "x01Wmjgqf4",
    Name: "Adrien",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "8oeiJIzHOZ",
    Name: "Abbie",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "YtDsze1KSU",
    Name: "Addyson",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "9KyNrDaJIG",
    Name: "Abe",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "FNwcTWyHgt",
    Name: "Adams",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "oK744WhybI",
    Name: "Ab",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "UuA5vVCTFi",
    Name: "Adina",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "C9d59ogE2o",
    Name: "Abbott",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "OzUpNALcxD",
    Name: "Adeline",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "qEHzUQLFZ5",
    Name: "Adan",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "qGgdC8GpOH",
    Name: "Adrienne",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "AsMRgCZAxe",
    Name: "Agness",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "v01xOmBSZM",
    Name: "Agustin",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "eUsAatPH4P",
    Name: "Adriana",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "oje77WgJyD",
    Name: "Adison",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "cFKp8Wkzf0",
    Name: "Adel",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "FskLO6NEEk",
    Name: "Adalberto",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "PVd6fp8Wg8",
    Name: "Abagail",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "8ev3ZSxV8v",
    Name: "Acey",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "J26c2wv0cR",
    Name: "Adyson",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "ilzu3qe5Rt",
    Name: "Adrianna",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "ZmOOdNjDZ1",
    Name: "Adamaris",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "tje9YlxoQz",
    Name: "Adele",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "uiGSLoNBub",
    Name: "Adline",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "WVAdH7SP7e",
    Name: "Adolph",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "vQuATuJhhQ",
    Name: "Agnes",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "OVzjCXlU24",
    Name: "Agustus",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "14RGXaMGIE",
    Name: "Ace",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "6kInjlVgak",
    Name: "Adolf",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "tz6Anl5Gbc",
    Name: "Adela",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "oBdUuciv1B",
    Name: "Adriene",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "12jaK7u15B",
    Name: "Adolphus",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "SNPUnuogI8",
    Name: "Adalyn",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "Vy3mXMFu7t",
    Name: "Adelbert",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "3NwL4ymtfP",
    Name: "Aggie",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "t1byd8omFJ",
    Name: "Adah",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "EgAXEMGPMr",
    Name: "Adlai",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "aOrgqRbJKf",
    Name: "Addison",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "GP9EwEQDb9",
    Name: "Adelard",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "BAWKDqRBwY",
    Name: "Adria",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "aXWqCkxD7f",
    Name: "Afton",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "PcVIkBYo8y",
    Name: "Agatha",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "tRR0sGQEX7",
    Name: "Admiral",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "yiAgLGaZmO",
    Name: "Affie",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "spvf2GvZDT",
    Name: "Abner",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "kMKBTdpvP1",
    Name: "Adaline",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "dUzXB1GTvV",
    Name: "Adelaide",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "BcdqIKfZzR",
    Name: "Aida",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "v6tn6Tn0hv",
    Name: "Ahmed",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "n5AWnyDOAD",
    Name: "Adelyn",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "uY69gQDXUT",
    Name: "Achsah",
    createdAt: "2020-01-23T22:01:41.275Z",
    updatedAt: "2020-01-23T22:01:41.275Z",
  },
  {
    objectId: "I7fViTtlFO",
    Name: "Ahmad",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "KfloQv0AYs",
    Name: "Adron",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
  {
    objectId: "nPLFTwIALj",
    Name: "Aiden",
    createdAt: "2020-01-23T22:01:41.741Z",
    updatedAt: "2020-01-23T22:01:41.741Z",
  },
  {
    objectId: "pdSYwD74ON",
    Name: "Aidan",
    createdAt: "2020-01-23T22:01:41.741Z",
    updatedAt: "2020-01-23T22:01:41.741Z",
  },
  {
    objectId: "KMmLOmlZzX",
    Name: "Ah",
    createdAt: "2020-01-23T22:01:41.276Z",
    updatedAt: "2020-01-23T22:01:41.276Z",
  },
];

const randomIndex = Math.floor(Math.random() * names.length);
console.log(names[randomIndex].Name);

const fuelTypes = ["diesel", "gas", "electric"];
const randomFuelIndex = Math.floor(Math.random() * 3);
console.log(fuelTypes[randomFuelIndex]);

console.log("Name?", Moniker.choose());

// await Promise.all(
//   names.map(
//     (name) =>
//       await Robot.create({
//         name,
//       })
//   )
// );

module.exports = {
  names,
  randomFuelIndex,
  randomIndex,
  fuelTypes,
};