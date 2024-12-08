const PathAnalyzer = require('./pathAnalyzer')
const PathNormalizer = require('./pathNormalizer')
const Timer = require('./timer')
const UserActionTracker = require('./userActionTracker');


// PathAnalyzer
const analyzer = new PathAnalyzer()
const filePath = "/home/user/documents/report.pdf"

console.log("Base Name:", analyzer.getBaseName(filePath))
console.log("Directory Name:", analyzer.getDirName(filePath))
console.log("File Extension:", analyzer.getExtension(filePath))
console.log("Is Absolute Path:", analyzer.isAbsolutePath(filePath))



// PathNormalizer
const normalizer = new PathNormalizer()

const normalizedPath = normalizer.normalizePath('./user/../user/documents//file.txt')
console.log("Normalized Path:", normalizedPath)

const joinedPath = normalizer.joinPaths('/home', 'user', 'documents', 'file.txt')
console.log("Joined Path:", joinedPath)





// Timer

const timer = new Timer(5)
timer.on("start",()=>{
  console.log("Timer started")
})
timer.on("tick",(timeLeft)=>{
  console.log(`Time left ${timeLeft} seconds`)
})
timer.on("end",()=>{
  console.log("Timer ended")
})
timer.start()















const tracker = new UserActionTracker();


tracker.on('actionLogged', (action) => {
  console.log(`actionLogged: ${action}`);
});


tracker.on('maxActions', (count) => {
  console.log(`maxActions: ${count} actions logged.`);
});


tracker.logAction('login');
tracker.logAction('viewProfile');
tracker.logAction('logout');
tracker.logAction('login');
tracker.logAction('updateProfile');
tracker.logAction('logout');


