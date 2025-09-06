import { useRouter } from 'next/router'
function Student() {
    const router = useRouter();
    const id = router.query.studentId;
  return (
    <div>
      user {id}
    </div>
  )
}

export default Student
