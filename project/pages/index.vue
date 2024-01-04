<template>
  <v-container>
    <v-row justify-center>
      <v-col cols="12" sm="12" md="6" lg="4">
        <v-card>
          <v-img src="~/assets/profile_picture.jpg" cover height="1000px">
            <v-row no-gutters justify="center" style="height: 100%; background: rgba(0,0,0,0.5)">
              <div>

                <div class="text-h4" style="margin-top:300px; color: white; margin-top: 700px;">
                  Akraradet Sinsamersuk
                </div>
                <div class="text-subtitle-1 text-center text-primary font-weight-bold" style="margin-top: 10px;">
                  PhD Student ＠ AIT
                </div>
                <div class="text-center" style="margin-top:10px">
                  <div class="d-flex justify-center">
                    <v-btn icon="mdi-github text-white" variant="text" ></v-btn>
                    <v-btn icon="mdi-facebook text-white" variant="text"></v-btn>
                    <v-btn icon="mdi-email text-white" variant="text"></v-btn>
                  </div>
                </div>
              </div>
              
            </v-row>
          </v-img> 
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="4">
        Insert about me
        <!-- <img src="~/assets/profile_picture.jpg" alt="Discover Nuxt 3" /> -->
      </v-col>
    </v-row>
  </v-container>
</template>