import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const exhibits = [
        {
            id: 'archimeduv-sroub',
            name: 'Archimédův šroub',
            description: 'Archimédův šroub je jedním z nejstarších způsobů čerpání vody. Toto jednoduché čerpadlo sestrojil a popsal Archimédés (287–212 př. n. l.). Inspiroval se ve starověkém Egyptě, kde vodu pumpovali podobným způsobem. Dříve byl Archimédův šroub důležitým prvkem na lodích, kde bylo jeho úkolem odstranění odpadní vody. Své využití má i dnes. Podobné šnekové čerpadlo najdeme třeba v brněnské čistírně odpadních vod, využívá se také k transportu zrní v kombajnech.',
            image: 'https://vida.cz/images/headers/main/576/_thumb5/archimeduv-sroub-v-akci.JPG',
            exposition_id: 'planeta'
        },
        {
            id: 'autombil-a-emise-co2',
            name: 'Automobil a emise CO2',
            description: 'Nastartujte automobil pomocí klíče a pozorujte, jak se nafukuje balón připevněný k jeho výfuku. Obsah CO2 v balónu odpovídá počtu kilometrů, které automobil urazí – ty naskakují na obrazovce. Doprava je v současnosti jedním z hlavních zdrojů znečištění životního prostředí, na pomyslném žebříčku předběhla i průmysl. Celkový počet motorových vozidel ve světě se pohybuje kolem jedné miliardy a neustále se zvyšuje. Je jich tedy zhruba 10krát méně než obyvatel planety Země.',
            image: 'https://vida.cz/images/headers/main/577/_thumb5/automobil-a-emise-co2.jpg',
            exposition_id: 'planeta'
        },
        {
            id: 'balonkova-pumpa',
            name: 'Balónková pumpa',
            description: 'Zatáhněte za lano s balónky směrem dolů a sledujte, jak se voda pumpuje do vyvýšené nádrže. Při pumpování vody pomocí balónků je voda uvězněná v úzké trubici mezi dvěma uzly. Balónky musí mít stejný průměr jako trubice, aby voda pomocí gravitace nestékala mezerou zpět. Energii potřebnou k překonání gravitace dodávají v našem případě lidské svaly. Úlohu transportovat vodu na delší vzdálenosti či ji přečerpávat z velké hloubky musely řešit už první civilizace. S malými mechanickými čerpadly se však můžeme potkat i v domácnosti. Pístové čerpadlo najdeme v dávkovači tekutého mýdla.',
            image: 'https://vida.cz/images/headers/main/604/_thumb5/vida-expo-baloenkcz.jpg',
            exposition_id: 'planeta'
        },
        {
            id: 'bermudsky-trojuhelnik',
            name: 'Bermudský trojúhelník',
            description: 'Pumpujte vzduch do válce s vodou, pokud ho v podobě bublin napumpujete dostatek, lodička plovoucí na hladině se potopí. Bubliny vzduchu ve vodě totiž snižují její hustotu, což znemožňuje lodičce udržet se na hladině. Změněná hustota vody je jednou z hypotéz usilujících o vysvětlení jevů v Bermudském trojúhelníku. Odborníci tvrdí, že na dně oceánu se nachází zemní plyn – metan, který se důsledkem otřesů mořského dna uvolňuje a uniká v podobě bublin do oceánu. Taková bublina po cestě k hladině nabývá velkých rozměrů, snižuje celkovou hustotu vody, a proto se loď potopí.',
            image: 'https://vida.cz/images/headers/main/617/_thumb5/img5728.jpg',
            exposition_id: 'planeta'
        },
        {
            id: 'bublinkovy-zavod',
            name: 'Bublinkový závod',
            description: 'Pumpujte vzduch do válců a pozorujte rychlost stoupání bublin v jednotlivých válcích. Vzduchové bubliny stoupají vzhůru, protože jsou lehčí než kapalina, ve které se nachází. Přesněji řečeno mají nižší hustotu.Vzduchové bubliny ve válcích stoupají různou rychlostí. Nejrychleji stoupají vzhůru ve válci naplněném vodou, o něco pomaleji ve válci se směsí vody a glycerolu a nejpomaleji ve válci, který obsahuje čistý glycerol. Je to způsobené odlišnou viskozitou těchto kapalin. Viskozita (vazkost) je výsledkem působení přitažlivých sil v kapalině.',
            image: 'https://vida.cz/images/headers/main/587/_thumb5/29check-it-out.jpg',
            exposition_id: 'planeta'
        }
    ]
    return NextResponse.json(Object.values(exhibits))
}