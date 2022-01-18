# Task description

## Kodeoppgave

Utviklerfaget er enormt bredt og vi vet at noen foretrekker frontend foran backend, eller
motsatt. Derfor er oppgavene nedenfor satt opp som forslag til hva du kan gjøre. API-et til
Opensea returnerer mye data og dermed mange muligheter, så her står en fritt til å gjøre
hva en vil og har kapasitet til.

Lenke til API: https://docs.opensea.io/reference/getting-assets

Forslag til oppgaver:

1. Hente ut data fra API-et og fremstille dette som et galleri- eller tabellvisning. Dette
kan for eksempel være å fremvise bilde og/eller video av kunsten, sammen med pris
eller andre relevante data. Man kan også gi brukeren mulighet til å sortere og/eller
filtrere dataene.
2. Sette opp en backend hvor en kan gi inn fiktive bud på de ulike NFT-ene. Man skal
altså ikke ikke legge inn et ekte bud på den faktiske NFT-en. Backenden bør
lagre de fiktive budene i en database eller annen lagringsmetode. Man kan også vise
dette frem i en frontend hvis man ønsker å lage det i tillegg.
3. Gi brukeren en mulighet til å lage sin egen NFT ved å laste opp et bilde, video eller
annen digital kunst. Man skal genere aktuelle data knyttet til denne NFT-en (PS:
NFT-en må ha et unikt token). Se på hva som blir returnert fra [opensea.io](https://opensea.io/) for
inspirasjon til hvilke data som bør være med.
4. NFT-er kommer ofte i samlinger hvor hver NFT har en liten, men unik vri. Hent ut alle
NFT-er i en samling (Collection) og vis dem sammen, eller rangere NFT-ene i
samlingen etter pris eller annen rangering.

PS: Total_price på NFT-ene i API-et blir returnert i valutaen [WEI](https://www.investopedia.com/terms/w/wei.asp).
