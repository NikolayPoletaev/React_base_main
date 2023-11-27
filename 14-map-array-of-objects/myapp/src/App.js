import './App.css';
// import persons from './data/persons'
import Person from './components/Person';

function App() {
const persons = [
    {"id":1,"firstName":"Hillel","lastName":"Puig","email":"hpuig0@arstechnica.com","img":"http://dummyimage.com/200x100.png/5fa2dd/ffffff"},
    {"id":2,"firstName":"Otto","lastName":"Rolfs","email":"orolfs1@rakuten.co.jp","img":"http://dummyimage.com/200x100.png/ff4444/ffffff"},
    {"id":3,"firstName":"Amil","lastName":"Croci","email":"acroci2@squidoo.com","img":"http://dummyimage.com/200x100.png/ff4444/ffffff"},
    {"id":4,"firstName":"Alida","lastName":"Killshaw","email":"akillshaw3@ebay.com","img":"http://dummyimage.com/200x100.png/5fa2dd/ffffff"},
    {"id":5,"firstName":"Packston","lastName":"Threadgall","email":"pthreadgall4@imageshack.us","img":"http://dummyimage.com/200x100.png/ff4444/ffffff"},
    {"id":6,"firstName":"Guillema","lastName":"Noni","email":"gnoni5@is.gd","img":"http://dummyimage.com/200x100.png/5fa2dd/ffffff"},
    {"id":7,"firstName":"Patrice","lastName":"Durnin","email":"pdurnin6@istockphoto.com","img":"http://dummyimage.com/200x100.png/cc0000/ffffff"},
    {"id":8,"firstName":"Galen","lastName":"Dei","email":"gdei7@about.com","img":"http://dummyimage.com/200x100.png/cc0000/ffffff"},
    {"id":9,"firstName":"Marysa","lastName":"Dunmore","email":"mdunmore8@cafepress.com","img":"http://dummyimage.com/200x100.png/5fa2dd/ffffff"},
    {"id":10,"firstName":"Delila","lastName":"Nani","email":"dnani9@va.gov","img":"http://dummyimage.com/200x100.png/ff4444/ffffff"},
    {"id":11,"firstName":"Jerrie","lastName":"Dommerque","email":"jdommerquea@wufoo.com","img":"http://dummyimage.com/200x100.png/cc0000/ffffff"},
    {"id":12,"firstName":"Laurel","lastName":"Vaszoly","email":"lvaszolyb@cmu.edu","img":"http://dummyimage.com/200x100.png/ff4444/ffffff"},
    {"id":13,"firstName":"Willey","lastName":"Piscopello","email":"wpiscopelloc@nba.com","img":"http://dummyimage.com/200x100.png/dddddd/000000"},
    {"id":14,"firstName":"Jessamine","lastName":"Shortt","email":"jshorttd@cnbc.com","img":"http://dummyimage.com/200x100.png/cc0000/ffffff"},
    {"id":15,"firstName":"Kris","lastName":"Playfoot","email":"kplayfoote@angelfire.com","img":"http://dummyimage.com/200x100.png/5fa2dd/ffffff"},
    {"id":16,"firstName":"Issie","lastName":"Paolini","email":"ipaolinif@bing.com","img":"http://dummyimage.com/200x100.png/cc0000/ffffff"},
    {"id":17,"firstName":"Robin","lastName":"Petyankin","email":"rpetyanking@google.pl","img":"http://dummyimage.com/200x100.png/5fa2dd/ffffff"},
    {"id":18,"firstName":"Conrade","lastName":"Putterill","email":"cputterillh@hostgator.com","img":"http://dummyimage.com/200x100.png/5fa2dd/ffffff"},
    {"id":19,"firstName":"Darrin","lastName":"McFall","email":"dmcfalli@washingtonpost.com","img":"http://dummyimage.com/200x100.png/5fa2dd/ffffff"},
    {"id":20,"firstName":"Roma","lastName":"MacCorkell","email":"rmaccorkellj@businessweek.com","img":"http://dummyimage.com/200x100.png/5fa2dd/ffffff"},
    {"id":21,"firstName":"Bengt","lastName":"Verrillo","email":"bverrillok@boston.com","img":"http://dummyimage.com/200x100.png/5fa2dd/ffffff"},
    {"id":22,"firstName":"Dugald","lastName":"St Pierre","email":"dstpierrel@meetup.com","img":"http://dummyimage.com/200x100.png/cc0000/ffffff"},
    {"id":23,"firstName":"Yuri","lastName":"Jull","email":"yjullm@alibaba.com","img":"http://dummyimage.com/200x100.png/ff4444/ffffff"},
    {"id":24,"firstName":"Rodrick","lastName":"Balmadier","email":"rbalmadiern@dmoz.org","img":"http://dummyimage.com/200x100.png/ff4444/ffffff"},
    {"id":25,"firstName":"Taryn","lastName":"Delacroux","email":"tdelacrouxo@upenn.edu","img":"http://dummyimage.com/200x100.png/dddddd/000000"},
    {"id":26,"firstName":"Laurent","lastName":"Alten","email":"laltenp@webs.com","img":"http://dummyimage.com/200x100.png/5fa2dd/ffffff"},
    {"id":27,"firstName":"Barr","lastName":"Harford","email":"bharfordq@google.ca","img":"http://dummyimage.com/200x100.png/5fa2dd/ffffff"},
    {"id":28,"firstName":"Milicent","lastName":"Claydon","email":"mclaydonr@umn.edu","img":"http://dummyimage.com/200x100.png/dddddd/000000"},
    {"id":29,"firstName":"Archibold","lastName":"Calvey","email":"acalveys@altervista.org","img":"http://dummyimage.com/200x100.png/5fa2dd/ffffff"},
    {"id":30,"firstName":"Kalie","lastName":"Wardall","email":"kwardallt@photobucket.com","img":"http://dummyimage.com/200x100.png/cc0000/ffffff"},
    {"id":31,"firstName":"Carrol","lastName":"Haborn","email":"chabornu@webmd.com","img":"http://dummyimage.com/200x100.png/5fa2dd/ffffff"},
    {"id":32,"firstName":"Jere","lastName":"Dyka","email":"jdykav@naver.com","img":"http://dummyimage.com/200x100.png/dddddd/000000"},
    {"id":33,"firstName":"Beauregard","lastName":"Sommerlin","email":"bsommerlinw@bloglines.com","img":"http://dummyimage.com/200x100.png/ff4444/ffffff"},
    {"id":34,"firstName":"Berny","lastName":"Wathan","email":"bwathanx@creativecommons.org","img":"http://dummyimage.com/200x100.png/ff4444/ffffff"},
    {"id":35,"firstName":"Conney","lastName":"Basile","email":"cbasiley@google.com.hk","img":"http://dummyimage.com/200x100.png/ff4444/ffffff"},
    {"id":36,"firstName":"Maddalena","lastName":"Zoren","email":"mzorenz@yahoo.co.jp","img":"http://dummyimage.com/200x100.png/dddddd/000000"},
    {"id":37,"firstName":"Leonore","lastName":"Stuckford","email":"lstuckford10@123-reg.co.uk","img":"http://dummyimage.com/200x100.png/5fa2dd/ffffff"},
    {"id":38,"firstName":"Lorain","lastName":"McComb","email":"lmccomb11@vistaprint.com","img":"http://dummyimage.com/200x100.png/ff4444/ffffff"},
    {"id":39,"firstName":"Aleta","lastName":"Kobierzycki","email":"akobierzycki12@hostgator.com","img":"http://dummyimage.com/200x100.png/dddddd/000000"},
    {"id":40,"firstName":"Ardella","lastName":"Alleyn","email":"aalleyn13@discovery.com","img":"http://dummyimage.com/200x100.png/5fa2dd/ffffff"},
    {"id":41,"firstName":"Marie","lastName":"Somers","email":"msomers14@nba.com","img":"http://dummyimage.com/200x100.png/5fa2dd/ffffff"},
    {"id":42,"firstName":"Bathsheba","lastName":"Lathwell","email":"blathwell15@patch.com","img":"http://dummyimage.com/200x100.png/dddddd/000000"},
    {"id":43,"firstName":"Othilie","lastName":"Wilsey","email":"owilsey16@godaddy.com","img":"http://dummyimage.com/200x100.png/cc0000/ffffff"},
    {"id":44,"firstName":"Aloysia","lastName":"Hector","email":"ahector17@arizona.edu","img":"http://dummyimage.com/200x100.png/cc0000/ffffff"},
    {"id":45,"firstName":"Prentice","lastName":"Patis","email":"ppatis18@usa.gov","img":"http://dummyimage.com/200x100.png/ff4444/ffffff"},
    {"id":46,"firstName":"Hussein","lastName":"Butner","email":"hbutner19@hao123.com","img":"http://dummyimage.com/200x100.png/dddddd/000000"},
    {"id":47,"firstName":"Kelbee","lastName":"Ybarra","email":"kybarra1a@instagram.com","img":"http://dummyimage.com/200x100.png/5fa2dd/ffffff"},
    {"id":48,"firstName":"Timmy","lastName":"Woodruff","email":"twoodruff1b@list-manage.com","img":"http://dummyimage.com/200x100.png/ff4444/ffffff"},
    {"id":49,"firstName":"Tab","lastName":"Cristou","email":"tcristou1c@answers.com","img":"http://dummyimage.com/200x100.png/dddddd/000000"},
    {"id":50,"firstName":"Wally","lastName":"Castagneto","email":"wcastagneto1d@livejournal.com","img":"http://dummyimage.com/200x100.png/dddddd/000000"}
    ]
  return (
    <div className="App">
      {persons.map((person) => {
        return <Person key={person.id} {...person}/>
      })}
    </div>
  );
}

export default App;