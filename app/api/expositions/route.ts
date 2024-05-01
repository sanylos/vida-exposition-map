import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const expositions = [
        {
            name: 'Pár exponátů',
            description: 'Popisek pro pár exponátů',
            floor: 2,
            image: '',
            path: '/par-exponatu'
        },
        {
            name: 'Dočasná expozice',
            description: 'Popisek pro dočasnou expozici',
            floor: 2,
            image: '',
            path: '/docasna-expozice'
        },
        {
            name: 'Bufet',
            description: 'Popisek pro bufet',
            floor: 2,
            image: '',
            path: '/bufet'
        },
        {
            name: 'Planeta',
            description: 'Nejdřív rozpoutejte tornádo a pokuste se ustát zemětřesení, pak si v rotující místnosti užijte účinky odstředivé síly a pohrajte si s oceánem v lahvi.',
            floor: 1,
            image: 'https://vida.cz/images/headers/main/132/_thumb1/expimgplaneta.png',
            path: '/planeta'
        },
        {
            name: 'Člověk',
            description: 'V obřím srdci se zaposlouchejte do vlastního tepu, vyzkoušejte si, jak namáhavá je činnost tlustého střeva, pokuste se masáží srdce zachránit lidský život, změřte si, jak vysoko vyskočíte a jaký máte postřeh, pronikněte do tajů znakové řeči, zkuste, jak vidí lidé se zrakovými vadami, vyndejte ježka z klece a vyřešte další zapeklité šifry a hlavolamy.',
            floor: 1,
            image: 'https://vida.cz/images/headers/main/131/_thumb1/expimgclovek.png',
            path: '/clovek'
        },
        {
            name: 'Mikrosvět',
            description: 'Postavte si magnetickou sochu, užijte si pohled na elektrický oblouk, který stoupá po žebříku a prozkoumejte svět pod mikroskopem.',
            floor: 1,
            image: 'https://vida.cz/images/headers/main/133/_thumb1/expimgmikrosvet.png',
            path: '/mikrosvet'
        },
        {
            name: 'Civilizace',
            description: 'Rozjeďte ledničku na lidský pohon, postavte z lega vlastní střed Brna, napište svá přání na zeď naděje a v hlukové místnosti zkuste překřičet tryskáč.',
            floor: 1,
            image: 'https://vida.cz/images/headers/main/153/_thumb1/expimgcivilizace.png',
            path: '/civilizace'
        },
        {
            name: 'Dětské science centrum',
            description: 'Na nejmenší návštěvníky tu čeká dopravní hřiště, kuličková dráha, archeologické pískoviště, obří piano, oblíbený tobogán i vodní hrátky s mlýnky.',
            floor: 1,
            image: 'https://vida.cz/images/headers/main/154/_thumb1/expimgdetske-sc.png',
            path: '/detske-science-centrum'
        },
        {
            name: 'Venkovní expozice',
            description: 'Hravé exponáty pod širým nebem. Těšte se na hučící kámen, tlakovou fontánu nebo akustické uši. To vše s krásným výhledem na pavilony brněnského výstaviště.',
            floor: 1,
            image: 'https://vida.cz/images/headers/main/1454/_thumb1/venkovni-expozice.jpg',
            path: '/venkovni-expozice'
        },
    ]
    return NextResponse.json({ ...expositions })
}