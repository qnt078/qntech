export default defineNuxtRouteMiddleware(async () => {
  const auth = useAuth()
  const router = useRouter()
  const session = (await auth.getSession()) as unknown as any
  session?.data.isAdmin ? router.push('/') : null
})
