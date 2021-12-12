import { Component } from '@angular/core';
import { SoundObject } from './components/sound-object/sound-object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  soundObjects: SoundObject[] = [];

  constructor() {
  }

  ngOnInit(): void {
    const soundCollection = this.getSoundCollection().sort((a: any, b: any) => {
      return a.Desc.localeCompare(b.Desc, 'hu');
    });

    this.soundObjects = soundCollection.map((soundEl: any) => {
      return new SoundObject(soundEl.Author, soundEl.Audio, soundEl.Desc)
    });
  }

  private getSoundCollection(): { Desc: string, Author: string, Audio: string }[] {
    return [
      { "Desc": "Intro", "Author": "All", "Audio": "tuneup_intro" },
      { "Desc": "Szia Christian", "Author": "Lori", "Audio": "szurke_lori_sziachristian" },
      { "Desc": "Csodásan nedves", "Author": "Lori", "Audio": "szurke_lori_csodasannedves" },
      { "Desc": "Bloeh", "Author": "Gaspar", "Audio": "szurke_gaspar_bloeh" },
      { "Desc": "Bekaptam", "Author": "Gaspar", "Audio": "szurke_gaspar_bekaptam" },
      { "Desc": "Nem szeretkezek", "Author": "Andras", "Audio": "szurke_andras_nemszeretkezek" },
      { "Desc": "Kommunista kiálltvány", "Author": "Andras", "Audio": "szurke_andras_kommunistakialltvany" },
      { "Desc": "Jó estét", "Author": "Andras", "Audio": "szurke_andras_joestet" },
      { "Desc": "Dios Mio", "Author": "Andras", "Audio": "szurke_andras_adios" },
      { "Desc": "Szent szar", "Author": "Akos", "Audio": "szurke_akos_szentszar" },
      { "Desc": "Szentséges basszantyú", "Author": "Akos", "Audio": "szurke_akos_szentsegesbasszantyu" },
      { "Desc": "Jóképű a szarházi", "Author": "Akos", "Audio": "szurke_akos_jokepuszarhazi" },
      { "Desc": "Basszál szájba", "Author": "Akos", "Audio": "szurke_akos_basszalszajba" },
      { "Desc": "Outro", "Author": "All", "Audio": "mindenki_outro" },
      { "Desc": "Tűzgyűrű", "Author": "Gaspar", "Audio": "gaspar_tuzgyuru" },
      { "Desc": "Szeretek háztetőkre felmászni", "Author": "Gaspar", "Audio": "gaspar_szeretekhaztetokrefelmaszni" },
      { "Desc": "Profi vagyunk", "Author": "Gaspar", "Audio": "gaspar_profi_vagyunk" },
      { "Desc": "A pénisz", "Author": "Lori", "Audio": "lori_apenisz" },
      { "Desc": "Micimackó", "Author": "All", "Audio": "mindenki_micimacko" },
      { "Desc": "Patkány", "Author": "Andras", "Audio": "andras_patkany" },
      { "Desc": "Valamiben még valaki maradt?", "Author": "Andras", "Audio": "andras_valamibenmegvalakimaradt" },
      { "Desc": "Sellő István", "Author": "Andras", "Audio": "andras_selloistvan" },
      { "Desc": "Bulihajó", "Author": "Andras", "Audio": "andras_bulihajo" },
      { "Desc": "Csalán", "Author": "Andras", "Audio": "andras_csalan" },
      { "Desc": "Büdös Pap", "Author": "Akos", "Audio": "akos_budospap" },
      { "Desc": "Én vagyok magam", "Author": "Andras", "Audio": "andras_envagyokmagam" },
      { "Desc": "Kenyeret loptam", "Author": "Andras", "Audio": "andras_kenyeretloptam" },
      { "Desc": "Süldő malac", "Author": "All", "Audio": "mindenki_suldomalac" },
      { "Desc": "Szerény véleményem szerint", "Author": "Lori", "Audio": "lori_galla" },
      { "Desc": "Híreket olvas", "Author": "Lori", "Audio": "lori_hireketolvas" },
      { "Desc": "Frolololo", "Author": "Akos", "Audio": "akos_frolololo" },
      { "Desc": "Szék", "Author": "Andras", "Audio": "andras_szek" },
      { "Desc": "Hannibál", "Author": "Lori", "Audio": "lori_hannibal" },
      { "Desc": "Búcsúzom", "Author": "Andras", "Audio": "andras_bucsuzom" },
      { "Desc": "Tavasz", "Author": "All", "Audio": "mindenki_tavasz" },
      { "Desc": "Mikrofontartó", "Author": "Andras", "Audio": "andras_mikrofontarto" },
      { "Desc": "Taken 2 ajánló", "Author": "Andras", "Audio": "andras_taken2" },
      { "Desc": "Volt egy hallgatója a Tune Upnak", "Author": "Andras", "Audio": "andras_visszahallgattam" },
      { "Desc": "Kozmodiszk", "Author": "Andras", "Audio": "andras_kozmodiszk" },
      { "Desc": "Rafael", "Author": "Gaspar", "Audio": "gaspar_rafael" },
      { "Desc": "Történelmi pillanat", "Author": "Andras", "Audio": "andras_tortenelmipillanat" },
      { "Desc": "Departed", "Author": "Andras", "Audio": "andras_departed" },
      { "Desc": "A halál nehéz", "Author": "Andras", "Audio": "andras_ahalalnehez" },
      { "Desc": "Szereted a kolbászt", "Author": "All", "Audio": "mindenki_szeretedakolbaszt" },
      { "Desc": "Puhapöcsű szarházi", "Author": "Andras", "Audio": "andras_puhapocsuszarhazi" },
      { "Desc": "Ijjaj", "Author": "All", "Audio": "mindenki_ijjaj" },
      { "Desc": "Harmadjára győzte le", "Author": "Andras", "Audio": "andras_harmadjaragyoztele" },
      { "Desc": "Nem csak az Élősködők", "Author": "Andras", "Audio": "andras_nemcsakazeloskodok" },
      { "Desc": "Szexi férfi", "Author": "Akos", "Audio": "akos_szexiferfi" },
      { "Desc": "Ááákos", "Author": "Akos", "Audio": "akos_aaakos" },
      { "Desc": "Ez lehetett volna egy hatalmas veszteség", "Author": "Akos", "Audio": "akos_ezlehetettvolnaegyhatalmasveszteseg" },
      { "Desc": "Hangok a moziban", "Author": "Akos", "Audio": "akos_hangokamoziban" },
      { "Desc": "Itthon ez a", "Author": "Akos", "Audio": "akos_itthoneza" },
      { "Desc": "Lekvárostészta", "Author": "Akos", "Audio": "akos_lekvarosteszta" },
      { "Desc": "Nyaldosnád", "Author": "Akos", "Audio": "akos_nyaldosnad" },
      { "Desc": "Aki még beszopta", "Author": "Andras", "Audio": "andras_akimegbeszopta" },
      { "Desc": "Az Oscar egyik legnagyobb vesztese", "Author": "Andras", "Audio": "andras_azoscaregyiklegnagyobbvesztese" },
      { "Desc": "Borosdugó", "Author": "Andras", "Audio": "andras_borosdugo" },
      { "Desc": "Csillagjegy", "Author": "Andras", "Audio": "andras_csillagjegy" },
      { "Desc": "Halálos iramban és 911", "Author": "Andras", "Audio": "andras_halalosirambanes911" },
      { "Desc": "Mandalorian", "Author": "Andras", "Audio": "andras_mandalorian" },
      { "Desc": "Spekturu", "Author": "Andras", "Audio": "andras_spekturu" },
      { "Desc": "Steven Seagal", "Author": "Andras", "Audio": "andras_stevenseagal" },
      { "Desc": "Transformers és földrajz", "Author": "Andras", "Audio": "andras_transformersesfoldrajz" },
      { "Desc": "Transformers logic", "Author": "Andras", "Audio": "andras_transformerslogic" },
      { "Desc": "Travolta", "Author": "Andras", "Audio": "andras_travolta" },
      { "Desc": "Hatan", "Author": "Gaspar", "Audio": "gaspar_hatan" },
      { "Desc": "I am Jesus", "Author": "Gaspar", "Audio": "gaspar_iamjesus" },
      { "Desc": "Star Wars vs Star Trek", "Author": "Gaspar", "Audio": "gaspar_starwarsvsstartrek" },
      { "Desc": "Suspense", "Author": "Gaspar", "Audio": "gaspar_suspense" },
      { "Desc": "Adj neki egy tehenet", "Author": "Lori", "Audio": "lori_adjnekiegytehenet" },
      { "Desc": "A legjobb", "Author": "Lori", "Audio": "lori_alegjobb" },
      { "Desc": "Beethoven", "Author": "Lori", "Audio": "lori_beethoven" },
      { "Desc": "G pont", "Author": "Lori", "Audio": "lori_gpont" },
      { "Desc": "Ákos énekelget", "Author": "All", "Audio": "mindenki_akosenekelgetesboltehen" },
      { "Desc": "Essünk egymás torkának", "Author": "Gaspar", "Audio": "gaspar_essunkegymastorkanak" },
      { "Desc": "Ezt nem tudod kimondani", "Author": "Gaspar", "Audio": "gaspar_eztnemtudodkimondani" },
      { "Desc": "Fagyi", "Author": "All", "Audio": "mindenki_fagyi" },
      { "Desc": "Fing", "Author": "All", "Audio": "mindenki_fing" },
      { "Desc": "Két Dark Saber", "Author": "All", "Audio": "mindenki_ketdarksaber" },
      { "Desc": "Never Ending Story", "Author": "Andras", "Audio": "andras_neverendingstory" },
      { "Desc": "Helyén kezelni", "Author": "Akos", "Audio": "akos_helyenkezelni" },
      { "Desc": "4:0", "Author": "All", "Audio": "all_4_0" },
      { "Desc": "Fel szoktál öltözni moziba menéshez?", "Author": "All", "Audio": "all_felszoktaloltoznimozibameneshez" },
      { "Desc": "Shyamalan fürdés", "Author": "All", "Audio": "all_shyamalanfurdes" },
      { "Desc": "Tégla elemzés", "Author": "All", "Audio": "all_teglaelemzes" },
      { "Desc": "Gázpalack ember", "Author": "Andras", "Audio": "andras_gazpalackember" },
      { "Desc": "Jó éjszakát", "Author": "Andras", "Audio": "andras_joejszakat" },
      { "Desc": "Jó étvágyat", "Author": "Andras", "Audio": "andras_joetvagyat" },
      { "Desc": "Megijedt a zene", "Author": "Andras", "Audio": "andras_megijedtazene" },
      { "Desc": "Mocskos sajtzabáló", "Author": "Andras", "Audio": "andras_mocskossajtzabalo" },
      { "Desc": "Patkányok", "Author": "Andras", "Audio": "andras_patkanyok" },
      { "Desc": "Zeller", "Author": "Andras", "Audio": "andras_zeller" },
      { "Desc": "Átutalások", "Author": "Lori", "Audio": "lori_atutalasok" },
      { "Desc": "Hannah Montana megerőszakolt", "Author": "Lori", "Audio": "lori_hannahmontanamegeroszakolt" },
      { "Desc": "Tizenéves lány hatvan éves papa", "Author": "Lori", "Audio": "lori_tizeneveslanyhatvanevespapa" }
    ]
  }
}