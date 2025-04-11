<template>
  <div>
    <v-card elevation="10" class="withbg">
      <v-card-item>
        <div class="d-sm-flex align-center justify-space-between pt-sm-2 ga-6">
          <div><v-card-title class="text-h5">Products</v-card-title></div>

          <div class="my-sm-0 my-2 d-flex align-center ga-2">
            <v-btn
              color="primary"
              outlined
              rounded
              @click="addProductDialog = true"
            >
              <v-icon>mdi-plus</v-icon> Add New Item
            </v-btn>

            <v-select
              v-model="select"
              :items="items"
              variant="outlined"
              density="compact"
              hide-details
            ></v-select>
          </div>
        </div>
        <div class="w-100 text-center mt-4">
          <v-text-field
            v-model="search"
            append-inner-icon="mdi-magnify"
            density="compact"
            label="Search product"
            variant="outlined"
            color="primary"
            hide-details
            single-line
          ></v-text-field>
        </div>
        <div class="mt-6">
          <v-row>
            <v-col
              cols="12"
              lg="3"
              sm="6"
              v-for="card in productsCard"
              :key="card._id"
            >
              <v-card elevation="10" class="withbg" rounded="md">
                <NuxtLink :to="`/admin/product`">
                  <v-img
                    :src="card.image"
                    height="100%"
                    class="rounded-t-md"
                    :aspect-ratio="1 / 1"
                    alt="Product"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        align="center"
                        class="fill-height ma-0"
                        justify="center"
                      >
                        <v-progress-circular
                          color="grey-lighten-5"
                          indeterminate
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </NuxtLink>
                <div class="d-flex justify-end mr-4 mt-n5 gap-2">
                  <v-btn
                    size="40"
                    icon
                    class="bg-primary d-flex"
                    @click.stop="showDialogEdit(card)"
                  >
                    <v-avatar size="30" class="text-white">
                      <v-icon size="small">mdi-pencil</v-icon>
                    </v-avatar>
                    <v-tooltip activator="parent" location="bottom">
                      Edit
                    </v-tooltip>
                  </v-btn>
                  <v-btn
                    :loading="loadingDeleteBtn"
                    size="40"
                    icon
                    class="bg-primary d-flex"
                    @click.stop="deleteProduct(card._id)"
                  >
                    <v-avatar size="30" class="text-white">
                      <v-icon size="small">mdi-delete</v-icon>
                    </v-avatar>
                    <v-tooltip activator="parent" location="bottom"
                      >Delete
                    </v-tooltip>
                  </v-btn>
                </div>
                <v-card-item class="pt-0">
                  <h6 class="text-h6" v-text="card.name"></h6>
                  <div class="d-flex align-center justify-space-between mt-1">
                    <div>
                      <span class="text-h6" v-text="'$' + card.price"></span>
                      <span
                        class="text-body-1 ml-2 text-medium-emphasis text-decoration-line-through"
                        v-text="'$' + card.price"
                      ></span>
                    </div>
                    <v-rating
                      density="compact"
                      color="warning"
                      size="small"
                      v-model="rating"
                      readonly
                    ></v-rating>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
          <div ref="el" class="scroll-trigger"></div>
          <div v-if="loading">
            <v-row
              align="center"
              class="fill-height ma-0 mt-2"
              justify="center"
            >
              <v-progress-circular
                color="primary"
                indeterminate
              ></v-progress-circular>
            </v-row>
          </div>
          <!-- <div v-else-if="!hasMore">
            <div class="text-center text-secondary mt-6">
              <v-chip> No more products to show </v-chip>
            </div>
          </div> -->
          <div v-else-if="search && !productsCard.length">
            <div class="text-center text-secondary mt-6">
              <v-chip>
                No products found with the search term: {{ search }}
              </v-chip>
            </div>
          </div>
        </div>
      </v-card-item>
    </v-card>
    <!-- Add Product Dialog -->
    <v-dialog v-model="addProductDialog" max-width="500">
      <v-card>
        <v-card-title
          class="text-h5 text-white"
          style="background-color: #ffb30e; padding: 10px 20px"
          >Add New Item
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="newProducts.name"
                  variant="outlined"
                  color="secondary"
                  density="compact"
                  dense
                  required
                  hide-details
                >
                  <template #label>
                    <div class="text-body-1">Product Name</div>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="newProducts.price"
                  variant="outlined"
                  color="secondary"
                  density="compact"
                  type="number"
                  min="0"
                  dense
                  required
                  hide-details
                >
                  <template #label>
                    <div class="text-body-1">Price</div>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="newProducts.description"
                  variant="outlined"
                  color="secondary"
                  density="compact"
                  dense
                  required
                  hide-details
                >
                  <template #label>
                    <div class="text-body-1">Description</div>
                  </template>
                </v-textarea>
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="newProducts.category"
                  variant="outlined"
                  :items="categoryItems"
                  color="secondary"
                  density="compact"
                  dense
                  required
                  hide-details
                >
                  <template #label>
                    <div class="text-body-1">Category</div>
                  </template>
                </v-select>
              </v-col>
              <v-col cols="12">
                <v-file-input
                  v-model="file"
                  :show-size="1000"
                  color="secondary"
                  label="File input"
                  placeholder="Select your files"
                  prepend-icon="mdi-paperclip"
                  variant="outlined"
                  density="compact"
                  counter
                >
                  <template v-slot:selection="{ fileNames }">
                    <template
                      v-for="(fileName, index) in fileNames"
                      :key="fileName"
                    >
                      <v-chip
                        v-if="index < 2"
                        class="me-2"
                        color="secondary"
                        size="small"
                        label
                      >
                        {{ fileName }}
                      </v-chip>
                    </template>
                  </template>
                </v-file-input>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions class="d-flex justify-end" style="padding: 10px 20px">
          <v-btn color="primary" @click="addProductDialog = false">
            Cancel
          </v-btn>
          <v-btn
            :loading="loadingAddBtn"
            color="primary"
            variant="tonal"
            @click="addProduct()"
            >Add</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Edit Product Dialog -->
    <v-dialog v-model="editProductDialog" max-width="500">
      <v-card>
        <v-card-title
          class="text-h5 text-white"
          style="background-color: #ffb30e; padding: 10px 20px"
          >Edit Item</v-card-title
        >
        <v-card-text>
          <v-form>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="editProducts.name"
                  variant="outlined"
                  color="secondary"
                  density="compact"
                  dense
                  required
                  hide-details
                >
                  <template #label>
                    <div class="text-body-1">Product Name</div>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="editProducts.price"
                  variant="outlined"
                  color="secondary"
                  density="compact"
                  type="number"
                  min="0"
                  dense
                  required
                  hide-details
                >
                  <template #label>
                    <div class="text-body-1">Price</div>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="editProducts.description"
                  variant="outlined"
                  color="secondary"
                  density="compact"
                  dense
                  required
                  hide-details
                >
                  <template #label>
                    <div class="text-body-1">Description</div>
                  </template>
                </v-textarea>
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="editProducts.category"
                  variant="outlined"
                  :items="categoryItems"
                  color="secondary"
                  density="compact"
                  hide-details
                >
                  <template #label>
                    <div class="text-body-1">Category</div>
                  </template>
                </v-select>
              </v-col>
              <v-col cols="12">
                <v-file-input
                  v-model="fileEdit"
                  :show-size="1000"
                  color="secondary"
                  label="Image"
                  placeholder="Select your files"
                  prepend-icon="mdi-paperclip"
                  variant="outlined"
                  density="compact"
                  counter
                >
                  <template v-slot:selection="{ fileNames }">
                    <template
                      v-for="(fileName, index) in fileNames"
                      :key="fileName"
                    >
                      <v-chip
                        v-if="index < 2"
                        class="me-2"
                        color="secondary"
                        size="small"
                        label
                      >
                        {{ fileName }}
                      </v-chip>
                    </template>
                  </template>
                </v-file-input>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions class="d-flex justify-end" style="padding: 10px 20px">
          <v-btn color="primary" @click="editProductDialog = false">
            Cancel
          </v-btn>
          <v-btn
            :loading="loadingEditBtn"
            color="primary"
            variant="tonal"
            @click="editProduct()"
            >Edit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import type { productsCards } from '~/types/dashboard/index'
import { useInfiniteScroll, watchDebounced } from '@vueuse/core'

const api = useNuxtApp().$api
const Swal: any = useNuxtApp().$swal
const el = ref<HTMLElement>()
const select = ref('Low To Top')
const items = ref(['Low To Top', 'Top To Low', 'Most Popular', 'Least Popular'])
const productsCard = ref<productsCards[]>([])
const rating = ref(5)
const search = ref('')
const page = ref(1)
const limit = 3
const loading = ref(false)
const loadingAddBtn = ref(false)
const loadingEditBtn = ref(false)
const loadingDeleteBtn = ref(false)
const hasMore = ref(true)
const addProductDialog = ref(false)
const editProductDialog = ref(false)
const categoryItems = ref(['Popular', 'best-seller'])
const newProducts = ref<productsCards>({
  name: '',
  price: 0,
  description: '',
  category: '',
  image: '',
})

const editProducts = ref<productsCards>({
  name: '',
  price: 0,
  description: '',
  category: '',
  image: '',
})

const defaultProduct = {
  name: '',
  price: 0,
  description: '',
  category: '',
  image: '',
}
const file = ref<File[] | undefined>()
const fileEdit = ref<File[] | undefined>()
onMounted(() => {
  getProducts()
  useInfiniteScroll(el, () => getProducts(), { distance: 50 })
})
watchDebounced(
  search,
  () => {
    page.value = 1
    productsCard.value = []
    hasMore.value = true
    getProducts()
  },
  {
    debounce: 500,
    maxWait: 1000,
  }
)

const getProducts = async () => {
  if (loading.value || !hasMore.value) return

  loading.value = true
  try {
    const response = await api.get(
      `/product?page=${page.value}&limit=${limit}&search=${search.value}`
    )
    const newProducts = response.data
    if (newProducts.length > 0) {
      productsCard.value = [...productsCard.value, ...newProducts]
      page.value++
    } else {
      hasMore.value = false
    }
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}
const refreshProducts = async () => {
  page.value = 1
  productsCard.value = []
  hasMore.value = true
  getProducts()
}

// ADD PRODUCT
const addProduct = async () => {
  loadingAddBtn.value = true
  const formData = new FormData()
  formData.append('name', newProducts.value.name)
  formData.append('price', newProducts.value.price.toString())
  formData.append('description', newProducts.value.description)
  formData.append('category', newProducts.value.category)
  if (file.value && file.value.length > 0) {
    formData.append('image', file.value[0])
  }

  try {
    await api.postFile('/product/upload', formData)

    newProducts.value = defaultProduct
    file.value = undefined
    refreshProducts()
    Swal.success('Product added successfully')
  } catch (error) {
    console.log(error)
    Swal.error('Failed to add product')
  } finally {
    addProductDialog.value = false
    loadingAddBtn.value = false
  }
}
// EDIT PRODUCT
const showDialogEdit = (items: productsCards) => {
  editProducts.value = items
  editProductDialog.value = true
}
const editProduct = async () => {
  loadingEditBtn.value = true
  const formData = new FormData()
  formData.append('name', editProducts.value.name)
  formData.append('price', editProducts.value.price.toString())
  formData.append('description', editProducts.value.description)
  formData.append('category', editProducts.value.category)
  if (fileEdit.value && fileEdit.value.length > 0) {
    formData.append('image', fileEdit.value[0])
  }

  try {
    await api.putFile(`/product/${editProducts.value._id}`, formData)

    editProducts.value = defaultProduct
    fileEdit.value = undefined

    refreshProducts()
    Swal.success('Product edited successfully')
  } catch (error) {
    console.log(error)
    Swal.error('Failed to edit product')
  } finally {
    editProductDialog.value = false
    loadingEditBtn.value = false
  }
}

// DELETE PRODUCT
const deleteProduct = async (id: any) => {
  // loadingDeleteBtn.value = true
  try {
    await api.delete(`/product/${id}`)
    refreshProducts()
    Swal.success('Product deleted successfully')
  } catch (error) {
    console.log(error)
    Swal.error('Failed to delete product')
  } finally {
    loadingDeleteBtn.value = false
  }
}
</script>

<style scoped></style>
