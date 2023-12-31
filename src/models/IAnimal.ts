// {"id":1,
// "name":"Majsan",
// "latinName":"Felis catus",
// "yearOfBirth":2017,
// "shortDescription":"Majsan tycker om att bli klappad, dock inte på magen. Hon tycker också om att klättra i träd.",
// "longDescription":"Katt (Felis catus), även känd som tamkatt, är ett relativt litet, smygjagande rovdjur i familjen kattdjur och ett vanligt sällskapsdjur i stora delar av världen. Falbkatten (Felis silvestris lybica), en underart till vildkatten (Felis silvestris), blev tidigt domesticerad av människan som nyttodjur för att hålla efter skadedjur eller för sällskap, både på landet och i stadsmiljö. Till havs har man sedan gammalt haft skeppskatter som skyddade mot gnagarangrepp på tåg och i proviantförråd. Katter kan dessutom vara underhållande för många människor med sin tillgivenhet och används även i terapeutiskt syfte vid psykisk ohälsa. Dock begränsas användningen av att vissa människor får allergireaktioner mot ämnen i kattens saliv, urin eller talgkörtlar. På många platser runt om i världen, speciellt på öar, utgör introducerade katter ett stort hot mot andra djur, exempelvis markhäckande fåglar.",
// "imageUrl":"https://www.hdnicewallpapers.com/Walls/Big/Cat/Cat_Eye_Twitching_Wonderful_Photo.jpg",
// "medicine":"Inga",
// "isFed":false,
// "lastFed":"2021-04-15T14:09:02.5912482"}

export interface IAnimal {
    id: number,
    name: string,
    latinName: string,
    yearOfBirth: number,
    shortDescription: string,
    longDescription: string,
    imageUrl: string,
    medicine: string,
    isFed: boolean,
    lastFed: string, //Date
}