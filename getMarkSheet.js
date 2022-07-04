import { reduce, values, map } from "@laufire/utils/collection";
const data = {
    markSheets: [
        {
            student: 'Sriram',
            rollNo: 11,
        },
        {
            student: 'Ram',
            rollNo: 16,
        },
        {
            student: 'sri',
            rollNo: 18,
        },
        {
            student: 'mani',
            rollNo: 20,
        },
    ]
};
const studentMarks = {
    '11': {
        tamil: 80,
        english: 90,
        science: 86,
        maths: 97,
        social: 76
    },
    '16': {
        tamil: 60,
        english: 97,
        science: 100,
        maths: 34,
        social: 100
    },
    '18': {
        tamil: 60,
        english: 90,
        science: 66,
        maths: 93,
        social: 46,
    },
    '20': {
        tamil: 40,
        english: 70,
        science: 86,
        maths: 73,
        social: 86,
    },
}
const StudentsDetails = (markSheets) => {
    const limit = 40;
    const name = markSheets.student;
    const rollNo = markSheets.rollNo;
    const marks = studentMarks[rollNo];
    const total = reduce(marks, (a, b) => a + b, 0);
    const result = Math.min(...values(marks)) >= limit ? 'Pass' : 'Fail';

    return {
        name,
        rollNo,
        ...marks,
        result,
        total
    }
}



const getCount = () => {
    var Pass = 0;
    var Fail = 0;
    const count = data.markSheets.map(StudentsDetails);
    map(count, ele => ele.result === 'Pass' ? Pass++ : Fail++);
    return {
        Pass,
        Fail
    }
};
const getRank = () => {
    const count = data.markSheets.map(StudentsDetails);
    const sortedMarkSheet = count.sort((a, b) => b.total - a.total);
    let rank = 0;
    const updated = map(sortedMarkSheet, markSheets => {
        (markSheets.result === 'Pass')
            ? markSheets.rank = ++rank
            : markSheets.rank = '-'
        return markSheets;
    });
    return updated;

};

const getStudentData = () => {
    const StudentData = getRank();
    const Count = getCount();
    return {
        StudentData,
        Count
    };
};
console.log(getStudentData());
export default getStudentData;