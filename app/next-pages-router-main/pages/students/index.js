import Link from "next/link"


function Students() {
    const students = [
        {id: 1, name: "Amir"},
        {id: 2, name: "Asghar"},
        {id: 3, name: "javad"},
        {id: 4, name: "Mamad"},

    ]
  return (
    <div>
      <ul>
        {students.map(student => <li key={student.id}><Link href={`/students/${student.id}`}>{student.name}</Link></li>)}
      </ul>
    </div>
  )
}

export default Students
