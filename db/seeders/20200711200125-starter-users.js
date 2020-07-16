"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Demo",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "demo@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "BadPlus",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "BadPlus@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/BadPlus.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/BadPlus.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Aguaturbia",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "Aguaturbia@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/Aguaturbia.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/Aguaturbia.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Arca",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "Arca@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/Arca.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/Arca.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "TownesVanZandt",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "TownesVanZandt@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/TownesVanZandt.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/TownesVanZandt.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "TimberTimbre",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "TimberTimbre@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/TimberTimbre.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/TimberTimbre.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "TheNerves",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "TheNerves@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/TheNerves.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/TheNerves.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "TheCramps",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "TheCramps@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/TheCramps.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/TheCramps.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Swans",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "Swans@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/TheSwans.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/Swans.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "SnarkyPuppy",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "SnarkyPuppy@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/SnarkyPuppy.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/SnarkyPuppy.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "FleetwoodMac",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "FleetwoodMac@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/FleetwoodMac.png",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/FleetwoodMac.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "RodrigoYGabriela",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "RodrigoYGabriela@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/RodrigoYGabriela.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/RodrigoYGabriela.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "NinaSimone",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "NinaSimone@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/NinaSimone.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/NinaSimone.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "MarvinGaye",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "MarvinGaye@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/MarvinGaye.png",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/MarvinGaye.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "LeeFields",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "LeeFields@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/LeeFields.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/LeeFields.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "JohnFahay",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "JohnFahay@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/JohnFahay.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/JohnFahey.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "JDilla",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "JDilla@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/JDilla.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/JDilla.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "TheGunClub",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "TheGunClub@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/GunClub.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/GunClub.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "FlyingLotus",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "FlyingLotus@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/FlyingLotus.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/FlyingLotus.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "CharlesWright",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "CharlesWright@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/CharlesWright.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/CharlesWright.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Health",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "Health@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/HEALTH.png",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/HEALTH.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "CyndiLauper",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "CyndiLauper@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/CyndiLauper.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/CyndiLauper.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "PattiSmith",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "PattiSmith@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/PattiSmith.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/PattiSmith.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "NeilYoung",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "NeilYoung@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/NeilYoung.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/NeilYoung.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "LoveAndRocketships",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "LoveAndRocketships@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/LoveAndRocketships.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/LoveAndRocketShips.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DirtyThree",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "DirtyThree@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/DirtyThree.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/DirtyThree.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "AndyStott",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "AndyStott@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/AndyStott.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/AndyStott.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "BruceSpringsteen",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "BruceSpringsteen@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/BruceSpringsteen.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/BruceSpringsteen.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "BoneThugsAndHarmony",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "BoneThugs@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/BoneThugsAndHarmony.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/BoneThugs.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "ThePogues",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "ThePogues@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/ThePogues.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/ThePogues.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "BadBrains",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "BadBrains@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/BadBrains.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/BadBrains.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "BillEvans",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "BillEvans@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/BillEvans.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/BillEvans.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "BlondeRedhead",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "BlondeRedhead@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/BlondeRedhead.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/BlondeRedhead.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "MFDoom",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "MFDoom@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/MFDoom.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/MFDoom.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "CharlesBradley",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "CharlesBradley@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/CharlesBradley.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/CharlesBradley.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "CharlesMingus",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "CharlesMingus@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/CharlesMingus.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/CharlesMingus.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "ChadVanGaalen",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "ChadVanGaalen@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/ChadVanGaalen.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/ChadVanGaalen.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DaftPunk",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "DaftPunk@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/DaftPunk.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/DaftPunk.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DangerMouse",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "DangerMouse@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/DangerMouse.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/DangerMouse.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DangerMouseAndDanieleLuppi",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "DangerMouseAndDanieleLuppi@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/DangerMouseAndDanieleLuppi.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/DangerMOuseAndDanieleLuppi.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DavidOistrakh",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "DavidOistrakh@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/DavidOistrakh.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/DavidOistrakh.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DeLaSoul",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "DeLaSoul@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/DeLaSoul.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/DeLaSoul.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DeadMoon",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "DeadMoon@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/DeadMoon.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/DeadMoon.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DeathGrips",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "DeathGrips@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/DeathGrips.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/DeathGrips.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "ElectricWizard",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "ElectricWizard@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/ElectricWizard.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/ElectricWizard.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "GangStarr",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "GangStarr@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/GangStarr.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/GangStarr.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "GeinohYamashirogumi",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "GeinohYamashirogumi@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/GeinohYamashirogumi.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/GeinohYamashirogumi.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "HandsomeBoyModelingSchool",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "HandsomeBoys@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/HandsomeBoyModellingSchool.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/HandsomeBoyModelingSchool.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "KateBush",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "KateBush@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/KateBush.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/KateBush.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "KingCrimson",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "KingCrimson@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/KingCrimson.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/KingCrimson.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "LauraMvula",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "LauraMvula@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/LauraMvula.png",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/LauraMvula.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "LeonardCohen",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "LeonardCohen@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/LeonardCohen.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/LeonardCohen.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Madlib",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "Madlib@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/Madlib.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/Madlib.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Moondog",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "Moondog@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/Moondog.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/MoonDog.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "MyBloodyValentine",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "MyBloodyValentine@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/MyBloodyValentine.png",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/MyBloodyValentine.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "NickCave",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "NickCave@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/NickCave.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/NickCave.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Onra",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "Onra@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/Onra.jpg",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/Onra.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Prince",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "Prince@gmail.com",
          profilePicUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/profile-pics/Prince.png",
          backgroundUrl:
            "https://noisewave.s3-us-west-2.amazonaws.com/background-pics/Prince.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users");
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
