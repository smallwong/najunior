let semester = ''; // 學期
let subject = ''; // 科目

const showDomHandle = (idEl) => {
  idEl.querySelectorAll('.subject').forEach((el) => {
    el.classList.remove('show');
    el.classList.contains('wordwall') && el.classList.add('show');
    el.classList.contains('kahoot') && el.classList.add('show');
    el.classList.contains('quizizz') && el.classList.add('show');
    el.classList.contains('quizlet') && el.classList.add('show');

    if (subject === '英語') {
      el.classList.contains('blooket') && el.classList.add('show');
    }
    if (subject === '數學') {
      el.classList.contains('quizlet') && el.classList.remove('show');
    }
    if (subject === '歷史' || subject === '地理' || subject === '公民') {
      el.classList.contains('coggle') && el.classList.add('show');
    }
    if (subject === '科技' || subject === '健體' || subject === '綜合') {
      el.classList.contains('wordwall') && el.classList.remove('show');
      el.classList.contains('quizizz') && el.classList.remove('show');
      el.classList.contains('quizlet') && el.classList.remove('show');
    }
  })
}

const subjectSelector = (id, index) => {
  const el = document.getElementById(id);
  el.querySelectorAll('.button').forEach((el, idx) => {
    el.classList.remove('active')
    if (idx === index){
      el.classList.add('active');
      if (id === 'semester') semester = el.innerHTML.trim();
      if (id === 'subject') subject = el.innerHTML;
    }
  })

  if (semester && subject) {
    document.getElementById('subject_options').classList.add('active');
  }

  if (semester === '112上' && subject) {
    const oneYear = document.getElementById('oneYear');
    showDomHandle(oneYear);


    const twoYear = document.getElementById('twoYear');
    showDomHandle(twoYear);


    const treeYear = document.getElementById('treeYear');
    showDomHandle(treeYear);
  }
}

const goToResource = (url) => {
  window.open(url);
}

const clickResource = (resource, year) => {
  switch (true) {
    case semester === '112上' && subject === '國文' && resource === "wordwall" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1b_6aGuoxQlLedBcLlOogz7-NRgEGq6VHlzyA-QuagaU/edit#gid=0')
      break;
    case semester === '112上' && subject === '國文' && resource === "kahoot" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1IHVVSZjyRgVi--MScIoSl_Cmx_HscqN0drFc_ZyXgSM/edit#gid=0')
      break;
    case semester === '112上' && subject === '國文' && resource === "quizizz" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1WYbZjerlgBFFZvIFI46huc_8DuhUCsI9bPCb9GzW6b0/edit#gid=0')
      break;
    case semester === '112上' && subject === '國文' && resource === "quizlet" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1YZhjRdvNEKP0-PqL5bY5qno5uspMiVGpzcNGr2e4mBo/edit#gid=0')
      break;
    case semester === '112上' && subject === '國文' && resource === "wordwall" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1b_6aGuoxQlLedBcLlOogz7-NRgEGq6VHlzyA-QuagaU/edit#gid=1584925057')
      break;
    case semester === '112上' && subject === '國文' && resource === "kahoot" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1IHVVSZjyRgVi--MScIoSl_Cmx_HscqN0drFc_ZyXgSM/edit#gid=543373563')
      break;
    case semester === '112上' && subject === '國文' && resource === "quizizz" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1WYbZjerlgBFFZvIFI46huc_8DuhUCsI9bPCb9GzW6b0/edit#gid=1476141604')
      break;
    case semester === '112上' && subject === '國文' && resource === "quizlet" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1YZhjRdvNEKP0-PqL5bY5qno5uspMiVGpzcNGr2e4mBo/edit#gid=1584925057')
      break;
    case semester === '112上' && subject === '國文' && resource === "wordwall" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1b_6aGuoxQlLedBcLlOogz7-NRgEGq6VHlzyA-QuagaU/edit#gid=1934389515')
      break;
    case semester === '112上' && subject === '國文' && resource === "kahoot" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1IHVVSZjyRgVi--MScIoSl_Cmx_HscqN0drFc_ZyXgSM/edit#gid=166440595')
      break;
    case semester === '112上' && subject === '國文' && resource === "quizizz" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1WYbZjerlgBFFZvIFI46huc_8DuhUCsI9bPCb9GzW6b0/edit#gid=1162908906')
      break;
    case semester === '112上' && subject === '國文' && resource === "quizlet" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1YZhjRdvNEKP0-PqL5bY5qno5uspMiVGpzcNGr2e4mBo/edit#gid=1934389515')
      break;



    case semester === '112上' && subject === '英語' && resource === "wordwall" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1zaLic6S5afst0NP0ZmWZ46ULhPzS4pW6/edit#gid=293011480')
      break;
    case semester === '112上' && subject === '英語' && resource === "kahoot" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1RTsoi8OVo8-Wi-iuvu-YFXpdwXvFOyeT/edit#gid=897853624')
      break;
    case semester === '112上' && subject === '英語' && resource === "quizizz" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1W9mWOWE4Q4FhfHjXH56bNbWeBy9huNrz/edit#gid=1882925630')
      break;
    case semester === '112上' && subject === '英語' && resource === "quizlet" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1jc5XQ0ZflVEps5BhWhseg50I1iAKFLwK/edit#gid=2092247393')
      break;
    case semester === '112上' && subject === '英語' && resource === "blooket" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1bjbq2Pi_y7jfqLFUO0KfUWi9csce-RUp/edit#gid=2092247393')
      break;
    case semester === '112上' && subject === '英語' && resource === "wordwall" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1zaLic6S5afst0NP0ZmWZ46ULhPzS4pW6/edit#gid=512376449')
      break;
    case semester === '112上' && subject === '英語' && resource === "kahoot" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1RTsoi8OVo8-Wi-iuvu-YFXpdwXvFOyeT/edit#gid=102504691')
      break;
    case semester === '112上' && subject === '英語' && resource === "quizizz" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1W9mWOWE4Q4FhfHjXH56bNbWeBy9huNrz/edit#gid=864248019')
      break;
    case semester === '112上' && subject === '英語' && resource === "quizlet" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1jc5XQ0ZflVEps5BhWhseg50I1iAKFLwK/edit#gid=179275534')
      break;
    case semester === '112上' && subject === '英語' && resource === "blooket" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1bjbq2Pi_y7jfqLFUO0KfUWi9csce-RUp/edit#gid=179275534')
      break;
    case semester === '112上' && subject === '英語' && resource === "wordwall" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1zaLic6S5afst0NP0ZmWZ46ULhPzS4pW6/edit#gid=1759360317')
      break;
    case semester === '112上' && subject === '英語' && resource === "kahoot" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1RTsoi8OVo8-Wi-iuvu-YFXpdwXvFOyeT/edit#gid=924676908')
      break;
    case semester === '112上' && subject === '英語' && resource === "quizizz" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1W9mWOWE4Q4FhfHjXH56bNbWeBy9huNrz/edit#gid=1581066528')
      break;
    case semester === '112上' && subject === '英語' && resource === "quizlet" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1jc5XQ0ZflVEps5BhWhseg50I1iAKFLwK/edit#gid=2044789595')
      break;
    case semester === '112上' && subject === '英語' && resource === "blooket" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1bjbq2Pi_y7jfqLFUO0KfUWi9csce-RUp/edit#gid=2044789595')
      break;




    case semester === '112上' && subject === '數學' && resource === "wordwall" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1fRMmR0j6FK6TZQ-Lka1ELabywOvI3l14caGkldYHLls/edit#gid=0')
      break;
    case semester === '112上' && subject === '數學' && resource === "kahoot" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1Yiauz_Oc9DbTeuUzKeUf6xN5CsGqlSX3A9jbLH2qBc0/edit#gid=0')
      break;
    case semester === '112上' && subject === '數學' && resource === "quizizz" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1FkyTWvA0MuyxbdzF4cMkPEbUGB8LL02lnPgIMKIr4qI/edit#gid=0')
      break;
    case semester === '112上' && subject === '數學' && resource === "wordwall" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1fRMmR0j6FK6TZQ-Lka1ELabywOvI3l14caGkldYHLls/edit#gid=916856904')
      break;
    case semester === '112上' && subject === '數學' && resource === "kahoot" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1Yiauz_Oc9DbTeuUzKeUf6xN5CsGqlSX3A9jbLH2qBc0/edit#gid=1714521674')
      break;
    case semester === '112上' && subject === '數學' && resource === "quizizz" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1FkyTWvA0MuyxbdzF4cMkPEbUGB8LL02lnPgIMKIr4qI/edit#gid=1476141604')
      break;
    case semester === '112上' && subject === '數學' && resource === "wordwall" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1fRMmR0j6FK6TZQ-Lka1ELabywOvI3l14caGkldYHLls/edit#gid=1871020819')
      break;
    case semester === '112上' && subject === '數學' && resource === "kahoot" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1Yiauz_Oc9DbTeuUzKeUf6xN5CsGqlSX3A9jbLH2qBc0/edit#gid=1224012546')
      break;
    case semester === '112上' && subject === '數學' && resource === "quizizz" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1FkyTWvA0MuyxbdzF4cMkPEbUGB8LL02lnPgIMKIr4qI/edit#gid=1162908906')
      break;


    case semester === '112上' && subject === '自然' && resource === "wordwall" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1x-XGIbEQ9V8HFYiPendokhCrktyvfhiRTj01coTZks0/edit#gid=0')
      break;
    case semester === '112上' && subject === '自然' && resource === "kahoot" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1LEu5EBmjd88U5SMJJ9N97vMOTHJNKdDrbfP4-62s88g/edit#gid=679462033')
      break;
    case semester === '112上' && subject === '自然' && resource === "quizizz" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1dIBC8vdN8jRZlzH0r-SS4rWR69gwK_aSHoXpEIHfibc/edit#gid=1871020819')
      break;
    case semester === '112上' && subject === '自然' && resource === "quizlet" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1J7HZFIApGac3KSHUWuW1FFxR_9GRjpWGaKjYN-c9MhY/edit#gid=0')
      break;
    case semester === '112上' && subject === '自然' && resource === "wordwall" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1x-XGIbEQ9V8HFYiPendokhCrktyvfhiRTj01coTZks0/edit#gid=1584925057')
      break;
    case semester === '112上' && subject === '自然' && resource === "kahoot" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1LEu5EBmjd88U5SMJJ9N97vMOTHJNKdDrbfP4-62s88g/edit#gid=543373563')
      break;
    case semester === '112上' && subject === '自然' && resource === "quizizz" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1dIBC8vdN8jRZlzH0r-SS4rWR69gwK_aSHoXpEIHfibc/edit#gid=2005991381')
      break;
    case semester === '112上' && subject === '自然' && resource === "quizlet" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1J7HZFIApGac3KSHUWuW1FFxR_9GRjpWGaKjYN-c9MhY/edit#gid=543373563')
      break;
    case semester === '112上' && subject === '自然' && resource === "wordwall" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1x-XGIbEQ9V8HFYiPendokhCrktyvfhiRTj01coTZks0/edit#gid=1934389515')
      break;
    case semester === '112上' && subject === '自然' && resource === "kahoot" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1LEu5EBmjd88U5SMJJ9N97vMOTHJNKdDrbfP4-62s88g/edit#gid=305835621')
      break;
    case semester === '112上' && subject === '自然' && resource === "quizizz" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1dIBC8vdN8jRZlzH0r-SS4rWR69gwK_aSHoXpEIHfibc/edit#gid=1343481458')
      break;
    case semester === '112上' && subject === '自然' && resource === "quizlet" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1J7HZFIApGac3KSHUWuW1FFxR_9GRjpWGaKjYN-c9MhY/edit#gid=166440595')
      break;



    case semester === '112上' && subject === '歷史' && resource === "wordwall" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1fSlRh-T_v0zRFghfSHmDxAXpPCTmYj1D9CtUiWpgtYk/edit#gid=0')
      break;
    case semester === '112上' && subject === '歷史' && resource === "kahoot" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1fT_mmUDoufLXt4RQdYLVecC5QtNnOwKm_ciXTFyBzF4/edit#gid=0')
      break;
    case semester === '112上' && subject === '歷史' && resource === "quizizz" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1Ktp1n5sSaC0PupVBytdLNoKxU3oLvXqDQvYTfOLOF_Q/edit#gid=0')
      break;
    case semester === '112上' && subject === '歷史' && resource === "quizlet" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1eE0yKq_HeRtOsVPZM_l2BLApQ6Yk9Whye1bCXJFlB1s/edit#gid=0')
      break;
    case semester === '112上' && subject === '歷史' && resource === "coggle" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1j5VN_AfcZhioS07LzHv4KDvFSZIaqcB7fKYGIfYSyuc/edit#gid=1948398241')
      break;
    case semester === '112上' && subject === '歷史' && resource === "wordwall" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1fSlRh-T_v0zRFghfSHmDxAXpPCTmYj1D9CtUiWpgtYk/edit#gid=551994853')
      break;
    case semester === '112上' && subject === '歷史' && resource === "kahoot" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1fT_mmUDoufLXt4RQdYLVecC5QtNnOwKm_ciXTFyBzF4/edit#gid=543373563')
      break;
    case semester === '112上' && subject === '歷史' && resource === "quizizz" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1Ktp1n5sSaC0PupVBytdLNoKxU3oLvXqDQvYTfOLOF_Q/edit#gid=356360018')
      break;
    case semester === '112上' && subject === '歷史' && resource === "quizlet" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1eE0yKq_HeRtOsVPZM_l2BLApQ6Yk9Whye1bCXJFlB1s/edit#gid=36999559')
      break;
    case semester === '112上' && subject === '歷史' && resource === "coggle" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1j5VN_AfcZhioS07LzHv4KDvFSZIaqcB7fKYGIfYSyuc/edit#gid=1948398241')
      break;
    case semester === '112上' && subject === '歷史' && resource === "wordwall" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1fSlRh-T_v0zRFghfSHmDxAXpPCTmYj1D9CtUiWpgtYk/edit#gid=1980726767')
      break;
    case semester === '112上' && subject === '歷史' && resource === "kahoot" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1fT_mmUDoufLXt4RQdYLVecC5QtNnOwKm_ciXTFyBzF4/edit#gid=166440595')
      break;
    case semester === '112上' && subject === '歷史' && resource === "quizizz" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1Ktp1n5sSaC0PupVBytdLNoKxU3oLvXqDQvYTfOLOF_Q/edit#gid=701803522')
      break;
    case semester === '112上' && subject === '歷史' && resource === "quizlet" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1eE0yKq_HeRtOsVPZM_l2BLApQ6Yk9Whye1bCXJFlB1s/edit#gid=47614564')
      break;
    case semester === '112上' && subject === '歷史' && resource === "coggle" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1j5VN_AfcZhioS07LzHv4KDvFSZIaqcB7fKYGIfYSyuc/edit#gid=1948398241')
      break;


    case semester === '112上' && subject === '地理' && resource === "wordwall" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1kvng7K-jCz6qbrnpi___9VFQB8QC2B_ohd_MDYliuek/edit#gid=0')
      break;
    case semester === '112上' && subject === '地理' && resource === "kahoot" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1frWFMGkc_Lzw5hN65VZER_G2IUd7Wd5vAwEPD_sS0RM/edit#gid=0')
      break;
    case semester === '112上' && subject === '地理' && resource === "quizizz" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1oUx5_HQCumE8vsoIKsKdJY_q7IwinOUjt7ecQxntkJw/edit#gid=0')
      break;
    case semester === '112上' && subject === '地理' && resource === "quizlet" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1HSv1T4lZC25IwDc4Wmp2vsof49PJVQRLIbYNtI23dc8/edit#gid=0')
      break;
    case semester === '112上' && subject === '地理' && resource === "coggle" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1j5VN_AfcZhioS07LzHv4KDvFSZIaqcB7fKYGIfYSyuc/edit#gid=975058488')
      break;
    case semester === '112上' && subject === '地理' && resource === "wordwall" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1kvng7K-jCz6qbrnpi___9VFQB8QC2B_ohd_MDYliuek/edit#gid=551994853')
      break;
    case semester === '112上' && subject === '地理' && resource === "kahoot" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1frWFMGkc_Lzw5hN65VZER_G2IUd7Wd5vAwEPD_sS0RM/edit#gid=1176416938')
      break;
    case semester === '112上' && subject === '地理' && resource === "quizizz" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1oUx5_HQCumE8vsoIKsKdJY_q7IwinOUjt7ecQxntkJw/edit#gid=658355306')
      break;
    case semester === '112上' && subject === '地理' && resource === "quizlet" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1HSv1T4lZC25IwDc4Wmp2vsof49PJVQRLIbYNtI23dc8/edit#gid=551994853')
      break;
    case semester === '112上' && subject === '地理' && resource === "coggle" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1j5VN_AfcZhioS07LzHv4KDvFSZIaqcB7fKYGIfYSyuc/edit#gid=975058488')
      break;
    case semester === '112上' && subject === '地理' && resource === "wordwall" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1kvng7K-jCz6qbrnpi___9VFQB8QC2B_ohd_MDYliuek/edit#gid=1980726767')
      break;
    case semester === '112上' && subject === '地理' && resource === "kahoot" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1frWFMGkc_Lzw5hN65VZER_G2IUd7Wd5vAwEPD_sS0RM/edit#gid=1691555320')
      break;
    case semester === '112上' && subject === '地理' && resource === "quizizz" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1oUx5_HQCumE8vsoIKsKdJY_q7IwinOUjt7ecQxntkJw/edit#gid=944647944')
      break;
    case semester === '112上' && subject === '地理' && resource === "quizlet" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1HSv1T4lZC25IwDc4Wmp2vsof49PJVQRLIbYNtI23dc8/edit#gid=1980726767')
      break;
    case semester === '112上' && subject === '地理' && resource === "coggle" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1j5VN_AfcZhioS07LzHv4KDvFSZIaqcB7fKYGIfYSyuc/edit#gid=975058488')
      break;



  
    case semester === '112上' && subject === '公民' && resource === "wordwall" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1WhOlcd0KbnMrZwr3kulDd1oKhK4jAOCZWjlE28nEpY0/edit#gid=0')
      break;
    case semester === '112上' && subject === '公民' && resource === "kahoot" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/14-6mLwbVh2-WuD2Y8raXJWo5LMNsLESRSArl9jlbr5Q/edit#gid=0')
      break;
    case semester === '112上' && subject === '公民' && resource === "quizizz" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1xLqephHbNjiWWfsbk9E6KVJZVVM8GU2LN5nsK0XO1YE/edit#gid=0')
      break;
    case semester === '112上' && subject === '公民' && resource === "quizlet" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1K_WMjQ7qiHIiCsf5kJCKmbqhs78rl2SOFaLY3d2rdqk/edit#gid=0')
      break;
    case semester === '112上' && subject === '公民' && resource === "coggle" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1j5VN_AfcZhioS07LzHv4KDvFSZIaqcB7fKYGIfYSyuc/edit#gid=1476717210')
      break;
    case semester === '112上' && subject === '公民' && resource === "wordwall" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1WhOlcd0KbnMrZwr3kulDd1oKhK4jAOCZWjlE28nEpY0/edit#gid=551994853')
      break;
    case semester === '112上' && subject === '公民' && resource === "kahoot" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/14-6mLwbVh2-WuD2Y8raXJWo5LMNsLESRSArl9jlbr5Q/edit#gid=543373563')
      break;
    case semester === '112上' && subject === '公民' && resource === "quizizz" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1xLqephHbNjiWWfsbk9E6KVJZVVM8GU2LN5nsK0XO1YE/edit#gid=1031185356')
      break;
    case semester === '112上' && subject === '公民' && resource === "quizlet" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1K_WMjQ7qiHIiCsf5kJCKmbqhs78rl2SOFaLY3d2rdqk/edit#gid=1425849348')
      break;
    case semester === '112上' && subject === '公民' && resource === "coggle" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1j5VN_AfcZhioS07LzHv4KDvFSZIaqcB7fKYGIfYSyuc/edit#gid=1476717210')
      break;
    case semester === '112上' && subject === '公民' && resource === "wordwall" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1WhOlcd0KbnMrZwr3kulDd1oKhK4jAOCZWjlE28nEpY0/edit#gid=1980726767')
      break;
    case semester === '112上' && subject === '公民' && resource === "kahoot" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/14-6mLwbVh2-WuD2Y8raXJWo5LMNsLESRSArl9jlbr5Q/edit#gid=166440595')
      break;
    case semester === '112上' && subject === '公民' && resource === "quizizz" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1xLqephHbNjiWWfsbk9E6KVJZVVM8GU2LN5nsK0XO1YE/edit#gid=439863278')
      break;
    case semester === '112上' && subject === '公民' && resource === "quizlet" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1K_WMjQ7qiHIiCsf5kJCKmbqhs78rl2SOFaLY3d2rdqk/edit#gid=697774509')
      break;
    case semester === '112上' && subject === '公民' && resource === "coggle" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1j5VN_AfcZhioS07LzHv4KDvFSZIaqcB7fKYGIfYSyuc/edit#gid=1476717210')
      break;



    case semester === '112上' && subject === '科技' && resource === "kahoot" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1AqfmaKnjZiWkwQK1TMy7TJRg3Ih2FpDdG1BDVuYBbJI/edit#gid=0')
      break;
    case semester === '112上' && subject === '科技' && resource === "kahoot" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1AqfmaKnjZiWkwQK1TMy7TJRg3Ih2FpDdG1BDVuYBbJI/edit#gid=543373563')
      break;
    case semester === '112上' && subject === '科技' && resource === "kahoot" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1AqfmaKnjZiWkwQK1TMy7TJRg3Ih2FpDdG1BDVuYBbJI/edit#gid=8793930')
      break;



    case semester === '112上' && subject === '健體' && resource === "kahoot" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1dd3jVPUZv0z8U99LUeVns0uCnyIjX25pYBuu8M48e4s/edit#gid=0')
      break;
    case semester === '112上' && subject === '健體' && resource === "kahoot" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1dd3jVPUZv0z8U99LUeVns0uCnyIjX25pYBuu8M48e4s/edit#gid=543373563')
      break;
    case semester === '112上' && subject === '健體' && resource === "kahoot" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1dd3jVPUZv0z8U99LUeVns0uCnyIjX25pYBuu8M48e4s/edit#gid=1784152553')
      break;


    case semester === '112上' && subject === '綜合' && resource === "kahoot" && year === 1:
      goToResource('https://docs.google.com/spreadsheets/d/1a_enWCrxr8ZzYGSj9G6LYfxRLwgt1eZZBLh_5PsuyMc/edit#gid=0')
      break;
    case semester === '112上' && subject === '綜合' && resource === "kahoot" && year === 2:
      goToResource('https://docs.google.com/spreadsheets/d/1a_enWCrxr8ZzYGSj9G6LYfxRLwgt1eZZBLh_5PsuyMc/edit#gid=543373563')
      break;
    case semester === '112上' && subject === '綜合' && resource === "kahoot" && year === 3:
      goToResource('https://docs.google.com/spreadsheets/d/1a_enWCrxr8ZzYGSj9G6LYfxRLwgt1eZZBLh_5PsuyMc/edit#gid=480948538')
      break;

    default:
      break;
  }
}

window.onscroll = () => {
  onScrollHandle()
}

const onScrollHandle = () => {
  const topBtn = document.getElementById("scrollTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
}

const goTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}