"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
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
          profilePicUrl: "default profile pic DO NOT MOVE.png",
          backgroundUrl: "default background DO NOT MOVE.jpg",
        },
        {
          username: "BadPlus",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "BadPlus@gmail.com",
          profilePicUrl: "profile-pics/BadPlus.jpg",
          backgroundUrl: "background-pics/BadPlus.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Aguaturbia",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "Aguaturbia@gmail.com",
          profilePicUrl: "profile-pics/Aguaturbia.jpg",
          backgroundUrl: "background-pics/Aguaturbia.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Arca",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "Arca@gmail.com",
          profilePicUrl: "profile-pics/Arca.jpg",
          backgroundUrl: "background-pics/Arca.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "TownesVanZandt",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "TownesVanZandt@gmail.com",
          profilePicUrl: "profile-pics/TownesVanZandt.jpg",
          backgroundUrl: "background-pics/TownesVanZandt.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "TimberTimbre",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "TimberTimbre@gmail.com",
          profilePicUrl: "profile-pics/TimberTimbre.jpg",
          backgroundUrl: "background-pics/TimberTimbre.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "TheNerves",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "TheNerves@gmail.com",
          profilePicUrl: "profile-pics/TheNerves.jpg",
          backgroundUrl: "background-pics/TheNerves.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "TheCramps",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "TheCramps@gmail.com",
          profilePicUrl: "profile-pics/TheCramps.jpg",
          backgroundUrl: "background-pics/TheCramps.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Swans",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "Swans@gmail.com",
          profilePicUrl: "profile-pics/TheSwans.jpg",
          backgroundUrl: "background-pics/Swans.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "SnarkyPuppy",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "SnarkyPuppy@gmail.com",
          profilePicUrl: "profile-pics/SnarkyPuppy.jpg",
          backgroundUrl: "background-pics/SnarkyPuppy.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "FleetwoodMac",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "FleetwoodMac@gmail.com",
          profilePicUrl: "profile-pics/FleetwoodMac.png",
          backgroundUrl: "background-pics/FleetwoodMac.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "RodrigoYGabriela",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "RodrigoYGabriela@gmail.com",
          profilePicUrl: "profile-pics/RodrigoYGabriela.jpg",
          backgroundUrl: "background-pics/RodrigoYGabriela.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "NinaSimone",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "NinaSimone@gmail.com",
          profilePicUrl: "profile-pics/NinaSimone.jpg",
          backgroundUrl: "background-pics/NinaSimone.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "MarvinGaye",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "MarvinGaye@gmail.com",
          profilePicUrl: "profile-pics/MarvinGaye.png",
          backgroundUrl: "background-pics/MarvinGaye.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "LeeFields",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "LeeFields@gmail.com",
          profilePicUrl: "profile-pics/LeeFields.jpg",
          backgroundUrl: "background-pics/LeeFields.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "JohnFahay",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "JohnFahay@gmail.com",
          profilePicUrl: "profile-pics/JohnFahay.jpg",
          backgroundUrl: "background-pics/JohnFahey.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "JDilla",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "JDilla@gmail.com",
          profilePicUrl: "profile-pics/JDilla.jpg",
          backgroundUrl: "background-pics/JDilla.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "TheGunClub",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "TheGunClub@gmail.com",
          profilePicUrl: "profile-pics/GunClub.jpg",
          backgroundUrl: "background-pics/GunClub.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "FlyingLotus",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "FlyingLotus@gmail.com",
          profilePicUrl: "profile-pics/FlyingLotus.jpg",
          backgroundUrl: "background-pics/FlyingLotus.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "CharlesWright",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "CharlesWright@gmail.com",
          profilePicUrl: "profile-pics/CharlesWright.jpg",
          backgroundUrl: "background-pics/CharlesWright.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Health",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "Health@gmail.com",
          profilePicUrl: "profile-pics/HEALTH.png",
          backgroundUrl: "background-pics/HEALTH.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "CyndiLauper",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "CyndiLauper@gmail.com",
          profilePicUrl: "profile-pics/CyndiLauper.jpg",
          backgroundUrl: "background-pics/CyndiLauper.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "PattiSmith",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "PattiSmith@gmail.com",
          profilePicUrl: "profile-pics/PattiSmith.jpg",
          backgroundUrl: "background-pics/PattiSmith.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "NeilYoung",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "NeilYoung@gmail.com",
          profilePicUrl: "profile-pics/NeilYoung.jpg",
          backgroundUrl: "background-pics/NeilYoung.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "LoveAndRocketships",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "LoveAndRocketships@gmail.com",
          profilePicUrl: "profile-pics/LoveAndRocketships.jpg",
          backgroundUrl: "background-pics/LoveAndRocketShips.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DirtyThree",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "DirtyThree@gmail.com",
          profilePicUrl: "profile-pics/DirtyThree.jpg",
          backgroundUrl: "background-pics/DirtyThree.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "AndyStott",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "AndyStott@gmail.com",
          profilePicUrl: "profile-pics/AndyStott.jpg",
          backgroundUrl: "background-pics/AndyStott.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "BruceSpringsteen",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "BruceSpringsteen@gmail.com",
          profilePicUrl: "profile-pics/BruceSpringsteen.jpg",
          backgroundUrl: "background-pics/BruceSpringsteen.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "BoneThugsAndHarmony",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "BoneThugs@gmail.com",
          profilePicUrl: "profile-pics/BoneThugsAndHarmony.jpg",
          backgroundUrl: "background-pics/BoneThugs.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "ThePogues",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "ThePogues@gmail.com",
          profilePicUrl: "profile-pics/ThePogues.jpg",
          backgroundUrl: "background-pics/ThePogues.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "BadBrains",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "BadBrains@gmail.com",
          profilePicUrl: "profile-pics/BadBrains.jpg",
          backgroundUrl: "background-pics/BadBrains.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "BillEvans",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "BillEvans@gmail.com",
          profilePicUrl: "profile-pics/BillEvans.jpg",
          backgroundUrl: "background-pics/BillEvans.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "BlondeRedhead",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "BlondeRedhead@gmail.com",
          profilePicUrl: "profile-pics/BlondeRedhead.jpg",
          backgroundUrl: "background-pics/BlondeRedhead.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "MFDoom",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "MFDoom@gmail.com",
          profilePicUrl: "profile-pics/MFDoom.jpg",
          backgroundUrl: "background-pics/MFDoom.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "CharlesBradley",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "CharlesBradley@gmail.com",
          profilePicUrl: "profile-pics/CharlesBradley.jpg",
          backgroundUrl: "background-pics/CharlesBradley.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "CharlesMingus",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "CharlesMingus@gmail.com",
          profilePicUrl: "profile-pics/CharlesMingus.jpg",
          backgroundUrl: "background-pics/CharlesMingus.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "ChadVanGaalen",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "ChadVanGaalen@gmail.com",
          profilePicUrl: "profile-pics/ChadVanGaalen.jpg",
          backgroundUrl: "background-pics/ChadVanGaalen.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DaftPunk",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "DaftPunk@gmail.com",
          profilePicUrl: "profile-pics/DaftPunk.jpg",
          backgroundUrl: "background-pics/DaftPunk.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DangerMouse",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "DangerMouse@gmail.com",
          profilePicUrl: "profile-pics/DangerMouse.jpg",
          backgroundUrl: "background-pics/DangerMouse.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DangerMouseAndDanieleLuppi",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "DangerMouseAndDanieleLuppi@gmail.com",
          profilePicUrl: "profile-pics/DangerMouseAndDanieleLuppi.jpg",
          backgroundUrl: "background-pics/DangerMOuseAndDanieleLuppi.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DavidOistrakh",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "DavidOistrakh@gmail.com",
          profilePicUrl: "profile-pics/DavidOistrakh.jpg",
          backgroundUrl: "background-pics/DavidOistrakh.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DeLaSoul",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "DeLaSoul@gmail.com",
          profilePicUrl: "profile-pics/DeLaSoul.jpg",
          backgroundUrl: "background-pics/DeLaSoul.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DeadMoon",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "DeadMoon@gmail.com",
          profilePicUrl: "profile-pics/DeadMoon.jpg",
          backgroundUrl: "background-pics/DeadMoon.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DeathGrips",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "DeathGrips@gmail.com",
          profilePicUrl: "profile-pics/DeathGrips.jpg",
          backgroundUrl: "background-pics/DeathGrips.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "ElectricWizard",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "ElectricWizard@gmail.com",
          profilePicUrl: "profile-pics/ElectricWizard.jpg",
          backgroundUrl: "background-pics/ElectricWizard.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "GangStarr",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "GangStarr@gmail.com",
          profilePicUrl: "profile-pics/GangStarr.jpg",
          backgroundUrl: "background-pics/GangStarr.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "GeinohYamashirogumi",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "GeinohYamashirogumi@gmail.com",
          profilePicUrl: "profile-pics/GeinohYamashirogumi.jpg",
          backgroundUrl: "background-pics/GeinohYamashirogumi.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "HandsomeBoyModelingSchool",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "HandsomeBoys@gmail.com",
          profilePicUrl: "profile-pics/HandsomeBoyModellingSchool.jpg",
          backgroundUrl: "background-pics/HandsomeBoyModelingSchool.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "KateBush",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "KateBush@gmail.com",
          profilePicUrl: "profile-pics/KateBush.jpg",
          backgroundUrl: "background-pics/KateBush.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "KingCrimson",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "KingCrimson@gmail.com",
          profilePicUrl: "profile-pics/KingCrimson.jpg",
          backgroundUrl: "background-pics/KingCrimson.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "LauraMvula",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "LauraMvula@gmail.com",
          profilePicUrl: "profile-pics/LauraMvula.png",
          backgroundUrl: "background-pics/LauraMvula.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "LeonardCohen",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "LeonardCohen@gmail.com",
          profilePicUrl: "profile-pics/LeonardCohen.jpg",
          backgroundUrl: "background-pics/LeonardCohen.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Madlib",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "Madlib@gmail.com",
          profilePicUrl: "profile-pics/Madlib.jpg",
          backgroundUrl: "background-pics/Madlib.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Moondog",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "Moondog@gmail.com",
          profilePicUrl: "profile-pics/Moondog.jpg",
          backgroundUrl: "background-pics/MoonDog.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "MyBloodyValentine",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "MyBloodyValentine@gmail.com",
          profilePicUrl: "profile-pics/MyBloodyValentine.png",
          backgroundUrl: "background-pics/MyBloodyValentine.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "NickCave",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "NickCave@gmail.com",
          profilePicUrl: "profile-pics/NickCave.jpg",
          backgroundUrl: "background-pics/NickCave.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Onra",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "Onra@gmail.com",
          profilePicUrl: "profile-pics/Onra.jpg",
          backgroundUrl: "background-pics/Onra.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Prince",
          hashedPassword:
            "$2a$10$QHrZC7/Hvox7VsdU1qLMu.Hd0X8S57lko8BGokHPYNZqhIKdLnVgG",
          email: "Prince@gmail.com",
          profilePicUrl: "profile-pics/Prince.png",
          backgroundUrl: "background-pics/Prince.jpg",
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
