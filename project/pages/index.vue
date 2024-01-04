<template>
  <v-container>
    <v-row justify="center">
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
                    <v-btn variant="text" class="text-white" icon="mdi-github" target="_black"
                      href="https://github.com/akraradets"></v-btn>
                    <v-btn variant="text" class="text-white" icon="mdi-facebook" target="_black"
                      href="https://www.facebook.com/akraradets/"></v-btn>
                  </div>
                </div>
              </div>

            </v-row>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="4">
        <v-row no-gutters>
          <v-col cols="12">

            <v-card flat prepend-icon="mdi-card-account-details">
              <template v-slot:title>
                Present
              </template>
              <v-card-item>
                <div class="d-flex ga-2">
                  <v-chip variant="flat" color='error' prepend-icon="mdi-school">Ph.D.</v-chip>
                  <v-chip variant="flat" color='info' prepend-icon="mdi-calendar-month">August 2020 - now</v-chip>
                  <v-chip variant="flat" color='info' prepend-icon="mdi-map-marker">AIT</v-chip>
                </div>
              </v-card-item>

              <v-card-text>
                Since August 2020, I have been a Ph.D.🎓 student🧑‍🎓 in Data Science🧪 and Artificial Intelligence🤖
                (DSAI) at Asian Institute of Technology (AIT), Thailand🇹🇭.
                I work under my lovely💖 advisor <v-chip density="compact">🔥Dr. Chaklam Silpasuwanchai🔥</v-chip>.
                Currently, we are trying to measure📏 glucose concentration in human blood🩸 using Raman Spectroscopy💡.
                <br><br>
                <b>Project I worked on:</b>
                <li>Detecting emotional using EEG</li>
                <li>Personality prediction using EEG</li>
                <li>Chronic Stress detectiong using EEG</li>
                <li><a target="_blank" href="https://link.springer.com/chapter/10.1007/978-981-99-7969-1_9">Data
                    Augmentation for EEG Motor Imagery Classification Using Diffusion Model</a></li>
                <li>Hybrid BCI spller with TRCA using Unicorn hat</li>

                <br>
                <b>Participation:</b>
                <li>Initiate AIT student well-being survey report</li>
                <li>Providing online/sound solution to SDG Open Hack Bangkok 2022</li>
                <li>Providing online/sound solution to DSAI conference 2022</li>
                <li>Implement/Maintain AIT Brainlab infrastructure including NAS, LDAP, Bind9, Traefik, JupyterHub, Docker</li>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">

            <v-card flat prepend-icon="mdi-history">
              <template v-slot:title>
                Previous
              </template>
              <v-card-item>
                <div class="d-flex ga-2">
                  <v-chip variant="flat" color='success' prepend-icon="mdi-school">Master</v-chip>
                  <v-chip variant="flat" color='success' prepend-icon="mdi-calendar-month">Aug 2018 - July 2020</v-chip>
                  <v-chip variant="flat" color='info' prepend-icon="mdi-map-marker">AIT</v-chip>
                </div>
              </v-card-item>

              <v-card-text>
                I graduted👨🏼‍🎓 my master in Computer Science (CS) at Asian Institute of Technology (AIT), Thailand🇹🇭.
                My master research topic is <i>Solving First Grade Mathamatic Problem using Natural Language
                  Processing</i>.

                <br><br>
                <b>Project I worked on:</b>
                <li><a target="_black" href="https://exam.cs.ait.ac.th/">PracXam</a>: Exam reposistory for CSIM</li>
                <li>Face recognition with liveliness deteion using homography</li>

                <br>
                <b>Participation:</b>
                <li>📷 Media Chairperson of AIT Student Union in August 2019</li>
                <li>🎸 Represent Thailand Music Group in every semesters</li>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

      </v-col>
    </v-row>
</v-container></template>