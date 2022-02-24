const data = {
    markSheets:[
        {
            student: 'Sriram',
            rollNo: 11,
            tamil: 80,
            english: 90,
            science: 86,
            maths: 97,
            social: 76,
        },
        {
            student: 'Ram',
            rollNo: 16,
            tamil: 60,
            english: 97,
            science: 100,
            maths: 34,
            social: 100,
            
        },
        {
            student: 'sri',
            rollNo: 18,
            tamil: 60,
            english: 90,
            science: 66,
            maths: 93,
            social: 46,
        },
        {
            student: 'mani',
            rollNo: 20,
            tamil: 40,
            english: 70,
            science: 86,
            maths: 73,
            social: 86,
        },
    ] 
};
const getStudentDetails = (markSheet) => {
    var {student,rollNo,tamil,english,science,maths,social } = markSheet;
    var total = tamil+english+science+maths+social;
    var result = (tamil<35|| english<35|| maths<35|| science<35 || social<35) ? "Fail" : "Pass";
    return {
        student,
        rollNo,
        tamil,
        english,
        science,
        maths,
        social,
        total,
        result,
    }
};
var getCount = () => {
    var pass = 0;
    var fail = 0;
    var count = data.markSheets.map(getStudentDetails);
    count.map(result => {
      (result.result == "Pass") ? pass += 1 : fail +=1;
    });
    return {
        pass,
        fail,
    }
}

var getRank = () => {
    var count = data.markSheets.map(getStudentDetails);
    var sortedArray = count.sort((a,b) => b.total - a.total);
    var rank = 0;
   var updatedmarkSheet =  sortedArray.map(markSheet => {
    (markSheet.result === "Pass") ?   markSheet.rank = ++rank : markSheet.rank == "-";
    return markSheet;
   });
    return updatedmarkSheet;
};

const getStudentData = () => {
    const StudentData = getRank();
    const Count = getCount();
    return [
        ...StudentData,
        Count,
    ]
};
console.table(getStudentData());


