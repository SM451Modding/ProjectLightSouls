// ==EMEVD==
// @docs    ds1-common.emedf.json
// @compress    DCX_DFLT_10000_24_9
// @game    DarkSouls1
// @string    ""
// @linked    []
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 11010008, 0);
    SetEventFlag(11010580, OFF);
    if (EventFlag(61010610)) {
        ReproduceObjectAnimation(1011101, 2);
        ModifyNavimeshConnectionBitflag(1013100, NavimeshType.Solid, BitopType.Add);
    }
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        DeactivateObject(1011994, Disabled);
        DeleteMapSFX(1011995, false);
        DeactivateObject(1011996, Disabled);
        DeleteMapSFX(1011997, false);
        DeactivateObject(1011998, Disabled);
        DeleteMapSFX(1011999, false);
        DeactivateObject(1011988, Disabled);
        DeleteMapSFX(1011989, false);
        DeactivateObject(1011986, Disabled);
        DeleteMapSFX(1011987, false);
        DeactivateObject(1011984, Disabled);
        DeleteMapSFX(1011985, false);
        DeactivateObject(1011982, Disabled);
        DeleteMapSFX(1011983, false);
        DeactivateObject(1011980, Disabled);
        DeleteMapSFX(1011981, false);
        DeactivateObject(1011978, Disabled);
        DeleteMapSFX(1011979, false);
        DeactivateObject(1011976, Disabled);
        DeleteMapSFX(1011977, false);
        DeactivateObject(1011974, Disabled);
        DeleteMapSFX(1011975, false);
        DeactivateObject(1011972, Disabled);
        DeleteMapSFX(1011973, false);
    }
    InitializeEvent(0, 11010090, 1011700, 1011701, 1012600, 1012601);
    InitializeEvent(1, 11010090, 1011702, 1011703, 1012602, 1012603);
    InitializeEvent(0, 11015070, 0);
    InitializeEvent(0, 11015071, 0);
    InitializeEvent(0, 11015072, 0);
    InitializeEvent(0, 11010903, 0);
    InitializeEvent(0, 11015110, 0);
    InitializeEvent(0, 11015113, 0);
    InitializeEvent(0, 11015112, 0);
    InitializeEvent(0, 11015130, 0);
    InitializeEvent(0, 11010710, 0);
    InitializeEvent(0, 11010111, 0);
    InitializeEvent(0, 11010120, 0);
    InitializeEvent(0, 11010150, 11010160, 1012401, 1012400);
    InitializeEvent(0, 11010160, 11010160, 1011314);
    InitializeEvent(1, 11010170, 11010171, 10010873, 1011306);
    InitializeEvent(2, 11010170, 11010172, 10010860, 1011311);
    InitializeEvent(1, 11010180, 11010181, 10010881, 1011317);
    InitializeEvent(0, 11010140, 11010140, 10010881, 1011310, 10010883, 2021);
    InitializeEvent(0, 11010190, 11010190, 10010876, 1011308, 10010883, 2017);
    InitializeEvent(1, 11010190, 11010191, 10010878, 1011315, 10010883, 2019);
    InitializeEvent(2, 11010190, 11010192, 10010878, 1011316, 10010883, 2019);
    InitializeEvent(0, 11010101, 1011320, 1, 101, 121, 7110);
    InitializeEvent(0, 11010102, 11010142, 1011320, 100);
    InitializeEvent(0, 11015185, 0);
    InitializeEvent(0, 11010611, 0);
    InitializeEvent(0, 11010600, 0);
    InitializeEvent(0, 11010601, 0);
    InitializeEvent(0, 11015116, 0);
    InitializeEvent(0, 11010609, 0);
    InitializeEvent(0, 11010607, 0);
    InitializeEvent(0, 11010608, 0);
    InitializeEvent(0, 11010621, 0);
    InitializeEvent(0, 11010700, 0);
    InitializeEvent(0, 11015170, 0);
    InitializeEvent(0, 11010100, 0);
    InitializeEvent(0, 11010780, 0);
    InitializeEvent(0, 11010580, 0);
    InitializeEvent(0, 11010585, 0);
    SetMapSoundState(1013800, Disabled);
    if (!EventFlag(3)) {
        SetMapSoundState(1013801, Disabled);
    }
    if (EventFlag(3)) {
        InitializeEvent(0, 11015392, 0);
        DeactivateObject(1011990, Disabled);
        DeleteMapSFX(1011991, false);
        DeactivateObject(1011992, Disabled);
        DeleteMapSFX(1011993, false);
    } else {
        InitializeEvent(0, 11010000, 0);
        InitializeEvent(0, 11015390, 0);
        InitializeEvent(0, 11015391, 0);
        InitializeEvent(0, 11015393, 0);
        InitializeEvent(0, 11015392, 0);
        InitializeEvent(0, 11010001, 0);
        InitializeEvent(0, 11015394, 0);
        InitializeEvent(0, 11015395, 0);
        InitializeEvent(0, 11015396, 0);
        InitializeEvent(0, 11010750, 1010800, 53500000);
        InitializeEvent(1, 11010750, 1010801, 53500100);
    }
    InitializeEvent(0, 11015397, 1010800, 5350, 5350, 1010810);
    InitializeEvent(0, 11015398, 1010801, 1010811);
    SetMapSoundState(1013802, Disabled);
    if (EventFlag(11010901)) {
        InitializeEvent(0, 11010901, 0);
        DeactivateObject(1011890, Disabled);
        DeleteMapSFX(1011891, false);
        DeactivateObject(1011892, Disabled);
        DeleteMapSFX(1011893, false);
    } else {
        InitializeEvent(0, 11015380, 0);
        InitializeEvent(0, 11015381, 0);
        InitializeEvent(0, 11015383, 0);
        InitializeEvent(0, 11015382, 0);
        InitializeEvent(0, 11015384, 0);
        InitializeEvent(0, 11015385, 0);
        InitializeEvent(0, 11015386, 0);
        InitializeEvent(0, 11010901, 0);
    }
    SetMapSoundState(1013803, Disabled);
    if (EventFlag(11010902)) {
        InitializeEvent(0, 11010902, 0);
        DeactivateObject(1011790, Disabled);
        DeleteMapSFX(1011791, false);
    } else {
        InitializeEvent(0, 11015370, 0);
        InitializeEvent(0, 11015371, 0);
        InitializeEvent(0, 11015373, 0);
        InitializeEvent(0, 11015372, 0);
        InitializeEvent(0, 11015374, 0);
        InitializeEvent(0, 11015375, 0);
        InitializeEvent(0, 11010902, 0);
    }
    if (EventFlag(11010900)) {
        InitializeEvent(0, 11010900, 0);
    } else {
        InitializeEvent(0, 11010899, 0);
        InitializeEvent(0, 11010900, 0);
        InitializeEvent(0, 11010782, 0);
        InitializeEvent(0, 11010783, 0);
        InitializeEvent(0, 11010790, 0);
        InitializeEvent(0, 11010791, 0);
        InitializeEvent(0, 11015301, 0);
        InitializeEvent(0, 11010784, 0);
        InitializeEvent(0, 11015302, 0);
        InitializeEvent(0, 11015303, 0);
        InitializeEvent(0, 11015304, 0);
        InitializeEvent(0, 11010851, 0);
        InitializeEvent(0, 11010852, 0);
        InitializeEvent(0, 11010890, 11015320, 11015321, 11015322, 11015323, 11015324, 11015325, 11015326);
        InitializeEvent(1, 11010890, 11015327, 11015328, 11015329, 11015330, 11015331, 11015332, 11015333);
        InitializeEvent(2, 11010890, 11015334, 11015335, 11015336, 11015337, 11015338, 11015339, 11015340);
        InitializeEvent(0, 11010850, 0);
        InitializeEvent(0, 11015307, 0);
        InitializeEvent(0, 11015308, 0);
        InitializeEvent(0, 11010200, 10, 3000);
        InitializeEvent(1, 11010200, 20, 3001);
        InitializeEvent(2, 11010200, 30, 3002);
        InitializeEvent(3, 11010200, 40, 3009);
        InitializeEvent(4, 11010200, 50, 3010);
        InitializeEvent(5, 11010200, 60, 7004);
        InitializeEvent(6, 11010200, 70, 7005);
        InitializeEvent(7, 11010200, 80, 7008);
        InitializeEvent(8, 11010200, 90, 7009);
        InitializeEvent(9, 11010200, 100, 7011);
    }
    InitializeEvent(0, 11015250, 1010250, 1010250, 1084227584, 0);
    InitializeEvent(1, 11015250, 1010251, 1010250, 1085276160, 0);
    InitializeEvent(2, 11015250, 1010260, 1010260, 1084227584, 0);
    InitializeEvent(3, 11015250, 1010261, 1010260, 1082130432, 0);
    InitializeEvent(4, 11015250, 1010262, 1010260, 1077936128, 0);
    InitializeEvent(5, 11015250, 1010263, 1010260, 1077936128, 0);
    InitializeEvent(0, 11010130, 1011250, 1010150, 1012150);
    InitializeEvent(1, 11010130, 1011251, 1010151, 1012150);
    InitializeEvent(2, 11010130, 1011252, 1010152, 1012150);
    InitializeEvent(3, 11010130, 1011253, 1010153, 1012151);
    InitializeEvent(4, 11010130, 1011254, 1010154, 1012151);
    InitializeEvent(5, 11010130, 1011255, 1010155, 1012151);
    InitializeEvent(0, 11010860, 6580, 0, 0);
    InitializeEvent(1, 11010860, 1010350, 1, 27900000);
    InitializeEvent(2, 11010860, 1010351, 1, 27900100);
    InitializeEvent(3, 11010860, 1010320, 0, 0);
    InitializeEvent(4, 11010860, 1010340, 0, 0);
    InitializeEvent(5, 11010860, 1010370, 0, 0);
    InitializeEvent(6, 11010860, 6010, 0, 0);
    InitializeEvent(2, 11010400, 1011652, 1011502);
    InitializeEvent(3, 11010400, 1011653, 1011503);
    InitializeEvent(4, 11010400, 1011654, 1011504);
    InitializeEvent(0, 11010650, 1011670, 11010650);
    InitializeEvent(1, 11010650, 1011671, 11010651);
    InitializeEvent(0, 11015846, 11010901, 1011890, 1011891);
    InitializeEvent(0, 11015843, 11010901, 1011890, 1012898, 1012897);
    InitializeEvent(1, 11015846, 11010902, 1011790, 1011791);
    InitializeEvent(1, 11015843, 11010902, 1011790, 1012888, 1012887);
    InitializeEvent(2, 11015846, 3, 1011990, 1011991);
    InitializeEvent(2, 11015843, 3, 1011990, 1012998, 1012997);
    InitializeEvent(0, 11014501, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 11010583, 0);
    RegisterNPCHumanityEventValue(6580, 8972);
    RegisterNPCHumanityEventValue(6540, 8310);
    RegisterNPCHumanityEventValue(6590, 8462);
    InitializeEvent(0, 11015100, 0);
    InitializeEvent(0, 11015900, 0);
    InitializeEvent(0, 11015101, 0);
    InitializeEvent(0, 11015103, 0);
    InitializeEvent(0, 11015901, 0);
    InitializeEvent(0, 11015104, 0);
    InitializeEvent(0, 11015990, 11015102, 6540);
    InitializeEvent(1, 11015990, 11015105, 6590);
    InitializeEvent(0, 11015203, 0);
    RegisterNPCHumanityEventValue(6001, 8310);
    if (!EventFlag(1007)) {
        if (!EventFlag(1004)) {
            if (!EventFlag(1001)) {
                if (!EventFlag(1000)) {
                    ChangeCharacterEnableState(6001, Disabled);
                }
            }
        }
    }
    GotoIf(S0, EventFlag(11510594));
    Goto(S1);
S0:
    WarpCharacterAndSetFloor(6001, TargetEntityType.Area, 1012530, -1, 1013050);
S1:
    InitializeEvent(0, 11010510, 6001, 1004);
    InitializeEvent(0, 11010520, 6001, 1000, 1029, 1005);
    InitializeEvent(0, 11010530, 6001, 1000, 1029, 1001);
    InitializeEvent(0, 11010531, 6001, 1000, 1029, 1007);
    RegisterNPCHumanityEventValue(6040, 8342);
    if (AnyBatchEventFlags(1112, 1113)) {
        ChangeCharacterEnableState(6040, Disabled);
    }
    InitializeEvent(1, 11010510, 6040, 1114);
    InitializeEvent(1, 11010520, 6040, 1110, 1119, 1115);
    InitializeEvent(0, 11010532, 6040, 1110, 1119, 1111);
    RegisterNPCHumanityEventValue(6072, 8358);
    if (!EventFlag(1175)) {
        ChangeCharacterEnableState(6072, Disabled);
    }
    InitializeEvent(0, 11010533, 6072, 1170, 1189, 1175);
    InitializeEvent(0, 11010501, 6072, 1179);
    InitializeEvent(0, 11010535, 6072, 1170, 1189, 1180);
    InitializeEvent(0, 11010534, 6072, 1170, 1189, 1181);
    InitializeEvent(0, 11010537, 6072, 1170, 1189, 1177);
    InitializeEvent(0, 11010538, 0);
    InitializeEvent(0, 11010539, 0);
    InitializeEvent(0, 11010582, 0);
    InitializeEvent(3, 11010510, 6190, 1321);
    InitializeEvent(3, 11010520, 6190, 1320, 1339, 1322);
    InitializeEvent(0, 11015090, 1321, 1322, 1011010);
    InitializeEvent(4, 11010510, 6230, 1401);
    InitializeEvent(4, 11010520, 6230, 1400, 1409, 1402);
    RegisterNPCHumanityEventValue(6300, 8462);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetEventFlag(11010584, OFF);
    }
    if (!EventFlag(11010584)) {
        if (!EventFlag(1574)) {
            if (!EventFlag(1570)) {
                ChangeCharacterEnableState(6300, Disabled);
            }
        }
    }
    InitializeEvent(6, 11010510, 6300, 1574);
    InitializeEvent(6, 11010520, 6300, 1570, 1599, 1575);
    InitializeEvent(0, 11010550, 6300, 1570, 1599, 1571);
    InitializeEvent(0, 11010552, 6300, 1570, 1599, 1577);
    InitializeEvent(0, 11010551, 0);
    RegisterNPCHumanityEventValue(6370, 8486);
    if (!EventFlag(11010581)) {
        ChangeCharacterEnableState(6370, Disabled);
    }
    InitializeEvent(7, 11010510, 6370, 1701);
    InitializeEvent(7, 11010520, 6370, 1700, 1709, 1702);
    InitializeEvent(0, 11010581, 6370);
});

$Event(11010008, Default, function() {
    RegisterBonfire(11010984, 1011961, 2, 180, 0);
    RegisterBonfire(11010976, 1011962, 2, 180, 0);
    RegisterBonfire(11010960, 1011964, 2, 180, 0);
    RegisterLadder(11010010, 11010011, 1011140);
    RegisterLadder(11010012, 11010013, 1011141);
    RegisterLadder(11010014, 11010015, 1011142);
    RegisterLadder(11010016, 11010017, 1011143);
    RegisterLadder(11010018, 11010019, 1011144);
    RegisterLadder(11010020, 11010021, 1011145);
    RegisterLadder(11010022, 11010023, 1011146);
    RegisterLadder(11010024, 11010025, 1011147);
    RegisterLadder(11010026, 11010027, 1011148);
    RegisterLadder(11010030, 11010031, 1011150);
    RegisterLadder(11010032, 11010033, 1011151);
    RegisterLadder(11010034, 11010035, 1011152);
    CreateDamagingObject(11010300, 1011450, 200, 5000, DamageTargetType.Character, 1.2, 0, 1);
    CreateDamagingObject(11010308, 1011407, 100, 5000, DamageTargetType.Character, 0.7, 0, 1);
    CreateDamagingObject(11010309, 1011408, 100, 5000, DamageTargetType.Character, 0.7, 0, 1);
});

$Event(11010090, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        DeactivateObject(X0_4, Disabled);
        DeleteMapSFX(X4_4, false);
        EndEvent();
    }
    act = ActionButtonLineSegment(TargetEntityType.Area, X8_4, 0, -1, 0, 10010403, ReactionType.HollowHuman, 0, X0_4);
    act2 = ActionButtonLineSegment(TargetEntityType.Area, X12_4, 0, -1, 0, 10010407, ReactionType.HollowHuman, 0, X0_4);
    WaitFor(act || act2);
    if (!act2.Passed) {
        IssueShortWarpRequest(10000, TargetEntityType.Area, X8_4, -1);
    } else {
        IssueShortWarpRequest(10000, TargetEntityType.Area, X12_4, -1);
    }
    ForceAnimationPlayback(10000, 7410, false, false, false);
    DeactivateObject(X0_4, Disabled);
    DeleteMapSFX(X4_4, true);
});

$Event(11015070, Restart, function() {
    EndIf(ThisEvent());
    ChangeCharacterEnableState(1010900, Disabled);
    ChangeCharacterEnableState(1010901, Disabled);
    ChangeCharacterEnableState(1010902, Disabled);
    ChangeCharacterEnableState(1010903, Disabled);
    ChangeCharacterEnableState(1010904, Disabled);
    ChangeCharacterEnableState(1010905, Disabled);
    ChangeCharacterEnableState(1010906, Disabled);
    ChangeCharacterEnableState(1010907, Disabled);
    ChangeCharacterEnableState(1010908, Disabled);
    ChangeCharacterEnableState(1010909, Disabled);
    ChangeCharacterEnableState(1010910, Disabled);
    ChangeCharacterEnableState(1010911, Disabled);
    ChangeCharacterEnableState(1010912, Disabled);
    WaitFor(EventFlag(11010050));
    EndIf(EventFlag(735));
    SetEventFlag(5000, ON);
    ChangeCharacterEnableState(1010900, Enabled);
    ChangeCharacterEnableState(1010901, Enabled);
    ChangeCharacterEnableState(1010902, Enabled);
    ChangeCharacterEnableState(1010903, Enabled);
    ChangeCharacterEnableState(1010904, Enabled);
    ChangeCharacterEnableState(1010905, Enabled);
    ChangeCharacterEnableState(1010906, Enabled);
    ChangeCharacterEnableState(1010907, Enabled);
    ChangeCharacterEnableState(1010908, Enabled);
    ChangeCharacterEnableState(1010909, Enabled);
    ChangeCharacterEnableState(1010910, Enabled);
    ChangeCharacterEnableState(1010911, Enabled);
    ChangeCharacterEnableState(1010912, Enabled);
});

$Event(11015071, Restart, function() {
    WaitFor(EventFlag(11015075) || EventFlag(735));
    if (EventFlag(735)) {
        SetEventFlag(735, OFF);
    }
    SetEventFlag(11010050, OFF);
    SetEventFlag(11015075, OFF);
    SetEventFlag(5001, ON);
    ForceCharacterDeath(1010900, false);
    ForceCharacterDeath(1010901, false);
    ForceCharacterDeath(1010902, false);
    ForceCharacterDeath(1010903, false);
    ForceCharacterDeath(1010904, false);
    ForceCharacterDeath(1010905, false);
    ForceCharacterDeath(1010906, false);
    ForceCharacterDeath(1010907, false);
    ForceCharacterDeath(1010908, false);
    ForceCharacterDeath(1010909, false);
    ForceCharacterDeath(1010910, false);
    ForceCharacterDeath(1010911, false);
    ForceCharacterDeath(1010912, false);
});

$Event(11015072, Restart, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(
        (WorldTendency(TendencyType.BlackTendency) > 50 && PlayerInMap(10, 1))
            || EventFlag(11010050));
    WaitFixedTimeFrames(1);
    RestartIf(
        !((WorldTendency(TendencyType.BlackTendency) > 50 && PlayerInMap(10, 1))
            || EventFlag(11010050)));
    WaitFixedTimeFrames(1);
    RestartIf(
        !((WorldTendency(TendencyType.BlackTendency) > 50 && PlayerInMap(10, 1))
            || EventFlag(11010050)));
    WaitFixedTimeFrames(1);
    RestartIf(
        !((WorldTendency(TendencyType.BlackTendency) > 50 && PlayerInMap(10, 1))
            || EventFlag(11010050)));
    WaitFixedTimeFrames(1);
    RestartIf(
        !((WorldTendency(TendencyType.BlackTendency) > 50 && PlayerInMap(10, 1))
            || EventFlag(11010050)));
    WaitFixedTimeFrames(1);
    RestartIf(
        !((WorldTendency(TendencyType.BlackTendency) > 50 && PlayerInMap(10, 1))
            || EventFlag(11010050)));
    SetEventFlag(11010050, ON);
    WaitFixedTimeSeconds(600);
    RestartIf(!(WorldTendency(TendencyType.BlackTendency) <= 50 && PlayerInMap(10, 1)));
    SetEventFlag(11010050, OFF);
    SetEventFlag(11015075, ON);
});

$Event(11010000, Restart, function() {
    if (ThisEvent()) {
        ChangeCharacterEnableState(1010802, Disabled);
        EndEvent();
    }
    SetCharacterAIState(1010802, Disabled);
    SetSpecialAnimations(1010802, 7000, -1, -1, -1, -1);
    SetCharacterInvincibility(1010802, Enabled);
    SetCharacterHPBarDisplay(1010802, Disabled);
    ChangeCharacterEnableState(1010800, Disabled);
    WaitFor(
        EventFlag(11015390) && HasMultiplayerState(MultiplayerState.Host) && InArea(10000, 1012999));
    EndIf(
        CharacterType(10000, TargetType.BlackPhantom) || CharacterType(10000, TargetType.Invader));
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        PlayCutsceneToPlayer(100110, CutscenePlayMode.Skippable, 10000);
    } else {
        PlayCutsceneToPlayer(100110, CutscenePlayMode.Unskippable, 10000);
    }
    WaitFixedTimeFrames(1);
    ChangeCharacterEnableState(1010802, Disabled);
    ChangeCharacterEnableState(1010800, Enabled);
});

$Event(11015390, Default, function() {
    WaitFor(
        !EventFlag(3)
            && ActionButtonLineSegmentBossRoom(TargetEntityType.Area, 1012998, 0, -1, 0, 10010403, ReactionType.HollowHuman, 0, 1011990));
    RotateCharacter(10000, 1012997);
    ForceAnimationPlayback(10000, 7410, false, false, false);
    RestartEvent();
});

$Event(11015391, Default, function() {
    WaitFor(
        !EventFlag(3)
            && EventFlag(11015393)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonLineSegment(TargetEntityType.Area, 1012998, 0, -1, 0, 10010403, ReactionType.All, 0, 1011990));
    RotateCharacter(10000, 1012997);
    ForceAnimationPlayback(10000, 7410, false, false, false);
    RestartEvent();
});

$Event(11015393, Default, function() {
    if (!ThisEvent()) {
        WaitFor(!EventFlag(3) && InArea(10000, 1012996));
    }
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
    }
    ActivateMultiplayerdependantBuffs(1010800);
});

$Event(11015392, Restart, function() {
    if (EventFlag(3)) {
        ChangeCharacterEnableState(1010800, Disabled);
        ChangeCharacterEnableState(1010801, Disabled);
        ChangeCharacterEnableState(1010802, Disabled);
        ChangeCharacterEnableState(1010810, Disabled);
        ChangeCharacterEnableState(1010811, Disabled);
        ForceCharacterDeath(1010800, false);
        ForceCharacterDeath(1010801, false);
        ForceCharacterDeath(1010802, false);
        ForceCharacterDeath(1010810, false);
        ForceCharacterDeath(1010811, false);
        EndEvent();
    }
    SetCharacterAIState(1010800, Disabled);
    WaitFor(EventFlag(11010000) && EventFlag(11015393) && InArea(10000, 1012990));
    SetCharacterAIState(1010800, Enabled);
    DisplayBossHealthBar(Enabled, 1010800, 0, 5350);
});

$Event(11010001, Default, function() {
    chr = CharacterDead(1010800);
    WaitFor(chr || CharacterDead(1010801));
    WaitFor(CharacterDead(1010800) && CharacterDead(1010801));
    SetEventFlag(3, ON);
    if (!chr.Passed) {
        PlaySE(1010800, SoundType.sSFX, 777777777);
    } else {
        PlaySE(1010801, SoundType.sSFX, 777777777);
    }
    HandleBossDefeat(1010800);
    DeactivateObject(1011990, Disabled);
    DeleteMapSFX(1011991, true);
    DeactivateObject(1011992, Disabled);
    DeleteMapSFX(1011993, true);
});

$Event(11015394, Default, function() {
    SetNetworkSyncState(Disabled);
    flagArea &= !EventFlag(3) && EventFlag(11010000) && EventFlag(11015392);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea &= EventFlag(11015391);
    }
    flagArea &= InArea(10000, 1012990);
    WaitFor(flagArea);
    SetMapSoundState(1013801, Disabled);
    SetMapSoundState(1013800, Enabled);
});

$Event(11015395, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(11015394) && EventFlag(3));
    SetMapSoundState(1013800, Disabled);
    SetMapSoundState(1013801, Enabled);
});

$Event(11015396, Restart, function() {
    EndIf(EventFlag(3));
    SetCharacterAIState(1010801, Disabled);
    SetSpecialAnimations(1010801, 7000, -1, -1, -1, -1);
    SetCharacterInvincibility(1010801, Enabled);
    SetCharacterHPBarDisplay(1010801, Disabled);
    WaitFor(HPRatio(1010800) <= 0.6);
    SetSpecialAnimations(1010801, -1, -1, -1, -1, -1);
    IssueShortWarpRequest(1010801, TargetEntityType.Area, 1012650, -1);
    ForceAnimationPlayback(1010801, 7001, false, true, false);
    SetCharacterInvincibility(1010801, Disabled);
    SetCharacterAIState(1010801, Enabled);
    DisplayBossHealthBar(Enabled, 1010801, 1, 5350);
});

$Event(11015397, Restart, function(X0_4, X4_2, X8_4, X12_4) {
    ChangeCharacterEnableState(X12_4, Disabled);
    if (ThisEventSlot()) {
        ChangeCharacterDispmask(X0_4, 0, OFF);
        ChangeCharacterHitmask(X0_4, 1, ON);
        SetSpEffect(X0_4, 5434);
        RequestCharacterAICommand(X0_4, 20, 0);
        EndEvent();
    }
    WaitFor(EventFlag(11015392) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 65, 1, 1, false, false);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    WarpCharacterAndCopyFloor(X12_4, TargetEntityType.Character, X0_4, 130, X0_4);
    ChangeCharacterEnableState(X12_4, Enabled);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, false, false);
    ForceAnimationPlayback(X12_4, 8100, false, false, false);
    ChangeCharacterDispmask(X0_4, 0, OFF);
    ChangeCharacterHitmask(X0_4, 1, ON);
    SetSpEffect(X0_4, 5434);
    RequestCharacterAICommand(X0_4, 20, 0);
    RequestCharacterAIReplan(X0_4);
    EndIf(!(CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.Hollow)));
    AwardItemsIncludingClients(53520000);
});

$Event(11015398, Restart, function(X0_4, X4_4) {
    ChangeCharacterEnableState(X4_4, Disabled);
    WaitFor(CharacterBackreadStatus(X0_4));
    ChangeCharacterHitmask(X0_4, 1, ON);
    ChangeCharacterHitmask(X0_4, 2, ON);
});

$Event(11010750, Default, function(X0_4, X4_4) {
    WaitFor(!EventFlag(3) && !CharacterDead(X0_4));
    WaitFor(CharacterDead(X0_4));
    EndIf(!(CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.Hollow)));
    AwardItemsIncludingClients(X4_4);
});

$Event(11015380, Default, function() {
    WaitFor(
        !EventFlag(11010901)
            && ActionButtonLineSegmentBossRoom(TargetEntityType.Area, 1012898, 0, -1, 0, 10010403, ReactionType.HollowHuman, 0, 1011890));
    RotateCharacter(10000, 1012897);
    ForceAnimationPlayback(10000, 7410, false, false, false);
    RestartEvent();
});

$Event(11015381, Default, function() {
    WaitFor(
        !EventFlag(11010901)
            && EventFlag(11015383)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonLineSegment(TargetEntityType.Area, 1012898, 0, -1, 0, 10010403, ReactionType.All, 0, 1011890));
    RotateCharacter(10000, 1012897);
    ForceAnimationPlayback(10000, 7410, false, false, false);
    RestartEvent();
});

$Event(11015383, Default, function() {
    if (!ThisEvent()) {
        WaitFor(!EventFlag(11010901) && InArea(10000, 1012896));
    }
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
        SetNetworkUpdateAuthority(1010700, AuthorityLevel.Forced);
    }
    ActivateMultiplayerdependantBuffs(1010700);
});

$Event(11015382, Restart, function() {
    if (ThisEvent()) {
        SetSpecialAnimations(1010700, -1, -1, -1, -1, -1);
        EndEvent();
    }
    SetCharacterAIState(1010700, Disabled);
    SetSpecialAnimations(1010700, 9001, -1, -1, -1, -1);
    SetCharacterHPBarDisplay(1010700, Disabled);
    WaitFor(
        CharacterDamagedBy(1010700, 10000)
            || (HasMultiplayerState(MultiplayerState.Host) && InArea(10000, 1012701)));
    SetEventFlag(11010005, ON);
    SetSpecialAnimations(1010700, -1, -1, -1, -1, -1);
    ForceAnimationPlayback(1010700, 9061, false, true, false);
    SetCharacterAIState(1010700, Enabled);
});

$Event(11015384, Default, function() {
    SetNetworkSyncState(Disabled);
    flagArea &= !EventFlag(11010901) && EventFlag(11015382);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea &= EventFlag(11015381);
    }
    flagArea &= InArea(10000, 1012890);
    WaitFor(flagArea);
    DisplayBossHealthBar(Enabled, 1010700, 0, 2250);
    SetMapSoundState(1013802, Enabled);
});

$Event(11015385, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(11015384) && EventFlag(11010901));
    DisplayBossHealthBar(Disabled, 1010700, 0, 2250);
    SetMapSoundState(1013802, Disabled);
});

$Event(11015386, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    chr = CharacterHasEventMessage(1010700, 700);
    chr2 = CharacterHasEventMessage(1010700, 710);
    WaitFor(chr || chr2);
    if (!chr2.Passed) {
        IssueShortWarpRequest(1010700, TargetEntityType.Area, 1012741, -1);
    } else {
        IssueShortWarpRequest(1010700, TargetEntityType.Area, 1012740, -1);
    }
    RestartEvent();
});

$Event(11010901, Restart, function() {
    if (ThisEvent()) {
        ChangeCharacterEnableState(1010700, Disabled);
        ForceCharacterDeath(1010700, false);
        EndEvent();
    }
    WaitFor(HPRatio(1010700) <= 0);
    WaitFixedTimeSeconds(1);
    PlaySE(1010700, SoundType.sSFX, 777777777);
    WaitFor(CharacterDead(1010700));
    SetEventFlag(11010901, ON);
    HandleBossDefeat(1010700);
    DeactivateObject(1011890, Disabled);
    DeleteMapSFX(1011891, true);
    DeactivateObject(1011892, Disabled);
    DeleteMapSFX(1011893, true);
});

$Event(11015370, Default, function() {
    WaitFor(
        !EventFlag(11010902)
            && ActionButtonLineSegmentBossRoom(TargetEntityType.Area, 1012888, 0, -1, 0, 10010403, ReactionType.HollowHuman, 0, 1011790));
    RotateCharacter(10000, 1012887);
    ForceAnimationPlayback(10000, 7410, false, true, false);
    RestartEvent();
});

$Event(11015371, Default, function() {
    WaitFor(
        !EventFlag(11010902)
            && EventFlag(11015373)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonLineSegment(TargetEntityType.Area, 1012888, 0, -1, 0, 10010403, ReactionType.All, 0, 1011790));
    RotateCharacter(10000, 1012887);
    ForceAnimationPlayback(10000, 7410, false, false, false);
    RestartEvent();
});

$Event(11015373, Default, function() {
    if (!ThisEvent()) {
        WaitFor(!EventFlag(11010902) && InArea(10000, 1012886));
    }
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
    }
    ActivateMultiplayerdependantBuffs(1010750);
    SetEventFlag(11010597, ON);
});

$Event(11015372, Restart, function() {
    if (!ThisEvent()) {
        SetCharacterAIState(1010750, Disabled);
        WaitFor(EventFlag(11015373) && InArea(10000, 1012880));
        SetCharacterAIState(1010750, Enabled);
    }
    DisplayBossHealthBar(Enabled, 1010750, 0, 2240);
});

$Event(11015374, Default, function() {
    SetNetworkSyncState(Disabled);
    flagArea &= !EventFlag(11010902) && EventFlag(11015372);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea &= EventFlag(11015371);
    }
    flagArea &= InArea(10000, 1012880);
    WaitFor(flagArea);
    SetMapSoundState(1013803, Enabled);
});

$Event(11015375, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(11015374) && EventFlag(11010902));
    SetMapSoundState(1013803, Disabled);
});

$Event(11010902, Restart, function() {
    if (ThisEvent()) {
        ChangeCharacterEnableState(1010750, Disabled);
        ChangeCharacterEnableState(1010500, Disabled);
        ChangeCharacterEnableState(1010501, Disabled);
        ForceCharacterDeath(1010750, false);
        ForceCharacterDeath(1010500, false);
        ForceCharacterDeath(1010501, false);
        EndEvent();
    }
    ChangeCharacterEnableState(1010510, Disabled);
    ChangeCharacterEnableState(1010511, Disabled);
    ForceCharacterDeath(1010510, false);
    ForceCharacterDeath(1010511, false);
    WaitFor(HPRatio(1010750) <= 0);
    WaitFixedTimeSeconds(1);
    PlaySE(1010750, SoundType.sSFX, 777777777);
    WaitFor(CharacterDead(1010750));
    SetEventFlag(11010902, ON);
    HandleBossDefeat(1010750);
    DeactivateObject(1011790, Disabled);
    DeleteMapSFX(1011791, true);
});

$Event(11010903, Restart, function() {
    if (ThisEvent()) {
        ChangeCharacterEnableState(1010310, Disabled);
        EndEvent();
    }
    WaitFor(CharacterDead(1010310));
    SetEventFlag(11010903, ON);
});

$Event(11015110, Restart, function() {
    if (ThisEvent()) {
        ReproduceObjectDestruction(1011103, 1);
        EndEvent();
    }
    SetCharacterAIState(1010102, Disabled);
    area = EntityInRadiusOfEntity(10000, 1010102, 5);
    obj = ObjectDestroyed(1011103);
    WaitFor(area || obj);
    if (!obj.Passed) {
        ForceAnimationPlayback(1010102, 3000, false, true, false);
    }
    SetCharacterAIState(1010102, Enabled);
});

$Event(11015111, Restart, function() {
    EndIf(ThisEvent());
    SetCharacterAIState(1010110, Disabled);
    area = InArea(10000, 1012110);
    WaitFor(
        area || CharacterDamagedBy(1010110, 10000) || EntityInRadiusOfEntity(1010110, 10000, 2));
    if (area.Passed) {
        ForceAnimationPlayback(1010110, 13005, false, true, false);
    }
    SetCharacterAIState(1010110, Enabled);
});

$Event(11015113, Restart, function() {
    EndIf(ThisEvent());
    SetCharacterAIState(1010200, Disabled);
    WaitFor(
        InArea(10000, 1012050)
            || CharacterDamagedBy(1010200, 10000)
            || EntityInRadiusOfEntity(1010200, 10000, 5));
    SetCharacterAIState(1010200, Enabled);
});

$Event(11015112, Restart, function() {
    EndIf(ThisEvent());
    SetCharacterAIState(1010111, Disabled);
    dmgArea = CharacterDamagedBy(1010111, 10000) || InArea(10000, 1012122);
    WaitFor(dmgArea || InArea(10000, 1012121));
    SetCharacterAIState(1010111, Enabled);
    EndIf(dmgArea.Passed);
    SetCharacterHome(1010111, 1012120);
    RequestCharacterAICommand(1010111, 10, 0);
    RequestCharacterAIReplan(1010111);
    WaitFor(InArea(10000, 1012122) || CharacterDamagedBy(1010111, 10000));
    RequestCharacterAICommand(1010111, -1, 0);
    RequestCharacterAIReplan(1010111);
});

$Event(11015130, Restart, function() {
    ChangeCharacterEnableState(1010400, Disabled);
    EndIf(EventFlag(11010710));
    WaitFor(ObjectDestroyed(1011000));
    ChangeCharacterEnableState(1010400, Enabled);
    if (!EventFlag(11015130)) {
        ForceAnimationPlayback(1010400, 500, false, true, false);
        ForceAnimationPlayback(1010400, 500, false, true, false);
        ForceAnimationPlayback(1010400, 500, false, true, false);
        ForceAnimationPlayback(1010400, 500, false, true, false);
    }
    SetCharacterHome(1010400, 1012060);
    RequestCharacterAICommand(1010400, 10, 0);
    RequestCharacterAIReplan(1010400);
    SetEventFlag(11015130, ON);
    WaitFor(InArea(1010400, 1012060));
    RequestCharacterAICommand(1010400, -1, 0);
    RequestCharacterAIReplan(1010400);
});

$Event(11010710, Restart, function() {
    ChangeCharacterEnableState(1010400, Disabled);
    EndIf(EventFlag(11010710));
    WaitFor(CharacterDead(1010400));
    EndIf(!(CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.Hollow)));
    AwardItemsIncludingClients(33006000);
});

$Event(11010111, Restart, function() {
    EndIf(ThisEvent());
    SetCharacterAIState(1010130, Disabled);
    dmg = CharacterDamagedBy(1010130, 10000);
    WaitFor(dmg || InArea(10000, 1012170));
    SetEventFlag(11010111, ON);
    SetCharacterAIState(1010130, Enabled);
    EndIf(dmg.Passed);
    DeactivateObjactAssignIndex(1011318, -1, 0, Disabled);
    DeactivateObjactAssignIndex(1011318, -1, 1, Disabled);
    DeactivateObjactAssignIndex(1011318, -1, 2, Disabled);
    DeactivateObjactAssignIndex(1011318, -1, 3, Disabled);
    IssueShortWarpRequest(1010130, TargetEntityType.Area, 1012171, -1);
    ForceAnimationPlayback(1010130, 7000, false, false, false);
    WaitFixedTimeSeconds(0.2);
    ForceAnimationPlayback(1011318, 2, false, true, false);
    SetEventFlag(61010518, ON);
    SetNetworkSyncState(Disabled);
    WaitFixedTimeSeconds(4);
    DeactivateObjactAssignIndex(1011318, 1318, 0, Disabled);
    DeactivateObjactAssignIndex(1011318, 1318, 1, Disabled);
    DeactivateObjactAssignIndex(1011318, 1318, 2, Enabled);
    DeactivateObjactAssignIndex(1011318, 1318, 3, Enabled);
});

$Event(11010120, Restart, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(1011102, 0);
        EndEvent();
    }
    SetCharacterAIState(1010103, Disabled);
    WaitFor(CharacterDamagedBy(1010103, 10000) || InArea(10000, 1012101));
    SetNetworkSyncState(Disabled);
    RequestCharacterAnimationReset(1010103, Interpolation.Interpolated);
    ForceAnimationPlayback(1010103, 3006, false, false, false);
    WaitFixedTimeSeconds(0.5);
    CreateObjectfollowingSFX(1011102, 1, 100100);
    ForceAnimationPlayback(1011102, 0, false, false, false);
    WaitFixedTimeSeconds(0.5);
    SetCharacterAIState(1010103, Enabled);
    CreateDamagingObject(11010121, 1011102, 1, 5020, DamageTargetType.Character, 0.6, 3, 0);
    WaitFixedTimeSeconds(3);
    DeleteObjectfollowingSFX(1011102, true);
});

$Event(11010101, Default, function(X0_4, X4_4, X8_2, X12_4, X16_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, X4_4);
        EndEvent();
    }
    WaitFor(
        ActionButton(TargetEntityType.Object, X0_4, 60, X8_2, 1.5, 10010400, ReactionType.All, 0));
    IssueShortWarpRequest(10000, TargetEntityType.Object, X0_4, X12_4);
    ForceAnimationPlayback(10000, X16_4, false, false, false);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
});

$Event(11010102, Default, function(X0_4, X4_4, X8_2) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        EventFlag(X0_4)
            || ActionButton(TargetEntityType.Object, X4_4, 60, X8_2, 1.5, 10010400, ReactionType.All, 0));
    EndIf(EventFlag(X0_4));
    DisplayGenericDialog(10010161, PromptType.YESNO, NumberofOptions.NoButtons, X4_4, 3);
    RestartEvent();
});

$Event(11010125, Restart, function() {
    EndIf(ThisEvent());
    ChangeCharacterEnableState(1010104, Disabled);
    IssueShortWarpRequest(1010104, TargetEntityType.Area, 1012130, -1);
    WaitFor(ThisEvent());
    ChangeCharacterEnableState(1010104, Enabled);
});

$Event(11010126, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(51010030));
    SetEventFlag(11010125, ON);
});

$Event(11010130, Restart, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 2);
        EndEvent();
    }
    SetCharacterAIState(X4_4, Disabled);
    WaitFor(InArea(10000, X8_4));
    WaitRandomTimeSeconds(0, 1);
    ForceAnimationPlayback(X4_4, 7001, false, false, false);
    SetCharacterAIState(X4_4, Enabled);
    WaitFixedTimeSeconds(0.1);
    ForceAnimationPlayback(X0_4, 2, false, false, false);
});

$Event(11010150, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    if (!EventFlag(X0_4)) {
        WaitFor(InArea(10000, X4_4));
        SetSpEffect(10000, 4150);
        WaitFixedTimeSeconds(3);
        RestartEvent();
    }
    WaitFor(InArea(10000, X4_4) || InArea(10000, X8_4));
    SetSpEffect(10000, 4150);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

$Event(11010160, Default, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        DeactivateObjactAssignIndex(X4_4, -1, 0, Disabled);
        DeactivateObjactAssignIndex(X4_4, -1, 1, Disabled);
        DeactivateObjactAssignIndex(X4_4, -1, 2, Disabled);
        DeactivateObjactAssignIndex(X4_4, -1, 3, Disabled);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(X0_4));
    SetEventFlag(X0_4, ON);
    WaitFixedTimeSeconds(2);
    DeactivateObjactAssignIndex(X4_4, -1, 0, Disabled);
    DeactivateObjactAssignIndex(X4_4, -1, 1, Disabled);
    DeactivateObjactAssignIndex(X4_4, -1, 2, Disabled);
    DeactivateObjactAssignIndex(X4_4, -1, 3, Disabled);
});

$Event(11010180, Default, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    WaitFor(ObjActEventFlag(X0_4));
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    DisplayGenericDialog(X4_4, PromptType.YESNO, NumberofOptions.NoButtons, X8_4, 3);
});

$Event(11010170, Default, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        DeactivateObjactAssignIndex(X8_4, -1, 0, Disabled);
        DeactivateObjactAssignIndex(X8_4, -1, 1, Disabled);
        DeactivateObjactAssignIndex(X8_4, -1, 2, Disabled);
        DeactivateObjactAssignIndex(X8_4, -1, 3, Disabled);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(X0_4));
    SetEventFlag(X0_4, ON);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    DisplayGenericDialog(X4_4, PromptType.YESNO, NumberofOptions.NoButtons, X8_4, 3);
    WaitFixedTimeSeconds(2);
    DeactivateObjactAssignIndex(X8_4, -1, 0, Disabled);
    DeactivateObjactAssignIndex(X8_4, -1, 1, Disabled);
    DeactivateObjactAssignIndex(X8_4, -1, 2, Disabled);
    DeactivateObjactAssignIndex(X8_4, -1, 3, Disabled);
});

$Event(11010140, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    WaitFor(ObjActEventFlag(X0_4));
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    if (!PlayerHasItem(ItemType.Goods, X16_4)) {
        DisplayGenericDialog(X12_4, PromptType.YESNO, NumberofOptions.NoButtons, X8_4, 3);
    } else {
        DisplayGenericDialog(X4_4, PromptType.YESNO, NumberofOptions.NoButtons, X8_4, 3);
    }
});

$Event(11010190, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (ThisEventSlot()) {
        DeactivateObjactAssignIndex(X8_4, -1, 0, Disabled);
        DeactivateObjactAssignIndex(X8_4, -1, 1, Disabled);
        DeactivateObjactAssignIndex(X8_4, -1, 2, Disabled);
        DeactivateObjactAssignIndex(X8_4, -1, 3, Disabled);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(X0_4));
    SetEventFlag(X0_4, ON);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    if (!PlayerHasItem(ItemType.Goods, X16_4)) {
        DisplayGenericDialog(X12_4, PromptType.YESNO, NumberofOptions.NoButtons, X8_4, 3);
    } else {
        DisplayGenericDialog(X4_4, PromptType.YESNO, NumberofOptions.NoButtons, X8_4, 3);
    }
    WaitFixedTimeSeconds(2);
    DeactivateObjactAssignIndex(X8_4, -1, 0, Disabled);
    DeactivateObjactAssignIndex(X8_4, -1, 1, Disabled);
    DeactivateObjactAssignIndex(X8_4, -1, 2, Disabled);
    DeactivateObjactAssignIndex(X8_4, -1, 3, Disabled);
});

$Event(11010100, Default, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(1011149, 0);
        RegisterLadder(11010028, 11010029, 1011149);
        EndEvent();
    }
    WaitFor(
        ActionButton(TargetEntityType.Object, 1011149, 60, 194, 1.5, 10010500, ReactionType.All, 0));
    SetEventFlag(11010100, ON);
    IssueShortWarpRequest(10000, TargetEntityType.Object, 1011149, 192);
    ForceAnimationPlayback(10000, 8005, false, false, false);
    WaitFixedTimeSeconds(0.5);
    ForceAnimationPlayback(1011149, 0, false, true, false);
    RegisterLadder(11010028, 11010029, 1011149);
});

$Event(11010400, Default, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 101);
        SetObjectTreasureState(X0_4, Enabled);
        EndEvent();
    }
    SetObjectTreasureState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 100, true, false, false);
    WaitFor(ObjectDestroyed(X4_4));
    ForceAnimationPlayback(X0_4, 101, false, true, false);
    SetObjectTreasureState(X0_4, Enabled);
});

$Event(11015250, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        SetSpecialAnimations(X0_4, -1, -1, -1, -1, -1);
        EndEvent();
    }
    SetCharacterMapHits(X0_4, true);
    WaitFor(EntityInRadiusOfEntity(10000, X4_4, X8_4));
    SetNetworkSyncState(Disabled);
    WaitFixedTimeSeconds(X12_4);
    SetCharacterMapHits(X0_4, false);
    SetSpecialAnimations(X0_4, -1, -1, 9060, -1, -1);
});

$Event(11015185, Default, function() {
    flagObj = EventFlag(61010610) && ObjActEventFlag(11010600);
    flagObj2 = !EventFlag(61010610) && ObjActEventFlag(11010600);
    WaitFor(flagObj || flagObj2);
    SetEventFlag(11015180, ON);
    if (!flagObj2.Passed) {
        SetEventFlag(11015181, ON);
        RestartEvent();
    }
    SetEventFlag(11015182, ON);
    RestartEvent();
});

$Event(11010611, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(ElapsedFrames(10) && PlayerInMap(10, 1));
    SetObjactState(1011100, -1, Enabled);
});

$Event(11010600, Default, function() {
    flagOnline = EventFlag(11015181) && HasMultiplayerState(MultiplayerState.Host);
    flagOnline2 = EventFlag(11015182) && HasMultiplayerState(MultiplayerState.Host);
    WaitFor(flagOnline || flagOnline2);
    SetEventFlag(11015180, OFF);
    SetEventFlag(11015181, OFF);
    SetEventFlag(11015182, OFF);
    if (!flagOnline2.Passed) {
        if (!EventFlag(61010610)) {
            InitializeEvent(0, 11010611, 0);
            RestartEvent();
        }
        ModifyNavimeshConnectionBitflag(1013100, NavimeshType.Solid, BitopType.Add);
        SetEventFlag(11010605, ON);
        ForceAnimationPlayback(1011101, 2, false, false, false);
        WaitFixedTimeFrames(60);
        InitializeEvent(0, 11010611, 0);
        RestartEvent();
    }
    if (EventFlag(61010610)) {
        InitializeEvent(0, 11010611, 0);
        RestartEvent();
    }
    ModifyNavimeshConnectionBitflag(1013100, NavimeshType.Solid, BitopType.Delete);
    ForceAnimationPlayback(1011101, 4, false, false, false);
    WaitFixedTimeFrames(200);
    InitializeEvent(0, 11010611, 0);
    RestartEvent();
});

$Event(11010601, Default, function() {
    WaitFor(EventFlag(11010605));
    SetEventFlag(11010605, OFF);
    WaitFixedTimeSeconds(0.5);
    CreateDamagingObject(11010602, 1011101, 42, 5010, DamageTargetType.Character, 0.6, 0.5, 0);
    CreateDamagingObject(11010603, 1011101, 43, 5010, DamageTargetType.Character, 0.6, 0.5, 0);
    CreateDamagingObject(11010604, 1011101, 44, 5010, DamageTargetType.Character, 0.6, 0.5, 0);
    RestartEvent();
});

$Event(11015116, Restart, function() {
    WaitFor(
        !EventFlag(61010610)
            && !EventFlag(11010607)
            && !EventFlag(11010600)
            && InArea(10000, 1012200));
    SetEventFlag(11015115, ON);
    WaitFor(EventFlag(11015181) || EventFlag(61010610));
    SetEventFlag(11015115, OFF);
});

$Event(11010609, Restart, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(11015115) && !EventFlag(61010610));
    InitializeObjact(1011100, -1, -1);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(11010607, Restart, function() {
    if (ThisEvent()) {
        IssueShortWarpRequest(6010, TargetEntityType.Area, 1012201, -1);
        SetCharacterHome(6010, 1012201);
        EndEvent();
    }
    WaitFor(
        InArea(6010, 1012771) && EntityInRadiusOfEntity(6010, 1011100, 3) && EventFlag(11015181));
    SetCharacterHome(6010, 1012201);
    ClearCharactersAITarget(6010);
    RequestCharacterAIReplan(6010);
});

$Event(11010608, Restart, function() {
    WaitFor(EventFlag(61010610) && CharacterBackreadStatus(1010310) && InArea(1010310, 1012771));
    RequestCharacterAICommand(1010310, 1, 0);
    SetCharacterHome(1010310, 1012773);
    WaitFor(!EventFlag(61010610));
    RequestCharacterAICommand(1010310, -1, 0);
    SetCharacterHome(1010310, 1012772);
    RestartEvent();
});

$Event(11010621, Default, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(1011121, 4);
        SetObjactState(1011120, -1, Disabled);
        EndEvent();
    }
    ReproduceObjectAnimation(1011121, 3);
    WaitFor(ObjActEventFlag(11010620));
    ForceAnimationPlayback(1011121, 4, false, false, false);
});

$Event(11010700, Default, function() {
    if (ThisEvent()) {
        SetObjactState(1011110, -1, Disabled);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(11010700));
    TriggerMultiplayerEvent(10010);
    WaitFor(HPRatio(10000) > 0);
    if (!EventFlag(11400200)) {
        PlayCutsceneToPlayer(100100, CutscenePlayMode.Skippable, 10000);
    } else {
        PlayCutsceneToPlayer(100105, CutscenePlayMode.Skippable, 10000);
        SetEventFlag(11500200, ON);
    }
    WaitFixedTimeFrames(1);
    AwardAchievement(29);
});

$Event(11015170, Default, function() {
    WaitFor(MultiplayerEvent(10010));
    SetNetworkSyncState(Disabled);
    PlaySE(1011111, SoundType.oObject, 130300002);
    WaitRandomTimeSeconds(0.5, 2);
    PlaySE(1011111, SoundType.oObject, 130300002);
    WaitRandomTimeSeconds(0.5, 2);
    PlaySE(1011111, SoundType.oObject, 130300002);
    RestartEvent();
});

$Event(11010860, Restart, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ForceCharacterDeath(X0_4, false);
        EndEvent();
    }
    WaitFor(CharacterDead(X0_4));
    if (X4_4 != 0) {
        EndIf(!(CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.Hollow)));
        AwardItemsIncludingClients(X8_4);
    }
    EndEvent();
});

$Event(11010650, Default, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 0);
        SetObjactState(X0_4, -1, Disabled);
        SetObjectTreasureState(X0_4, Enabled);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(X4_4));
    WaitFixedTimeFrames(10);
    SetObjectTreasureState(X0_4, Enabled);
});

$Event(11010899, Default, function() {
    SetCharacterImmortality(1010300, Enabled);
    ChangeCharacterEnableState(1010300, Disabled);
    SetCharacterHome(1010300, 1012320);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetNetworkUpdateAuthority(1010300, AuthorityLevel.Forced);
        SetEventFlag(11010782, OFF);
    }
    if (EventFlag(11010791) && !EventFlag(11015311)) {
        SetEventFlag(11015310, OFF);
        ChangeCharacterEnableState(1010300, Enabled);
        WarpCharacterAndSetFloor(1010300, TargetEntityType.Area, 1012310, -1, 1013211);
        SetSpecialAnimations(1010300, 7006, -1, -1, -1, -1);
        SetCharacterMapHits(1010300, true);
        SetCharacterGravity(1010300, Disabled);
    }
    if (EventFlag(11010791) && EventFlag(11015311)) {
        ChangeCharacterEnableState(1010300, Enabled);
        IssueShortWarpRequest(1010300, TargetEntityType.Area, 1012320, -1);
        SetSpecialAnimations(1010300, -1, -1, -1, -1, -1);
        SetCharacterHome(1010300, 1012340);
    }
    InitializeEvent(0, 11010805, 11015320, 11015325, 7004, 11015350);
    InitializeEvent(1, 11010805, 11015326, 11015331, 7008, 11015350);
    InitializeEvent(2, 11010805, 11015332, 11015333, 7009, 11015350);
    InitializeEvent(3, 11010805, 11015334, 11015337, 7011, 11015350);
    InitializeEvent(4, 11010805, 11015338, 11015339, 7006, 11015350);
    InitializeEvent(5, 11010805, 11015320, 11015323, 7009, 11015351);
    InitializeEvent(6, 11010805, 11015324, 11015339, 7006, 11015351);
    InitializeEvent(7, 11010805, 11015320, 11015323, 7011, 11015352);
    InitializeEvent(8, 11010805, 11015324, 11015339, 7006, 11015352);
    InitializeEvent(9, 11010805, 11015320, 11015321, 7004, 11015353);
    InitializeEvent(10, 11010805, 11015322, 11015333, 7008, 11015353);
    InitializeEvent(11, 11010805, 11015334, 11015335, 7009, 11015353);
    InitializeEvent(12, 11010805, 11015336, 11015337, 7011, 11015353);
    InitializeEvent(0, 11010800, 11015338, 11015339, 7010, 11015353);
    InitializeEvent(1, 11010800, 11015320, 11015339, 7010, 11015354);
});

$Event(11010900, Restart, function() {
    if (ThisEvent()) {
        ChangeCharacterEnableState(1010300, Disabled);
        ChangeCharacterEnableState(1010301, Disabled);
        ChangeCharacterEnableState(1010302, Disabled);
        EndEvent();
    }
    hpFlag = HPRatio(1010300) < 0.1 && !EventFlag(11015312) && !EventFlag(11015300);
    hpFlag2 = hpFlag && !EventFlag(11010791) && !EventFlag(11015311);
    hpFlag3 = hpFlag && EventFlag(11010791) && !EventFlag(11015311);
    WaitFor(hpFlag2 || hpFlag3 || (hpFlag && EventFlag(11010791) && EventFlag(11015311)));
    SetEventFlag(11015310, ON);
    if (hpFlag2.Passed) {
        ForceAnimationPlayback(1010300, 7001, false, true, false);
        ChangeCharacterEnableState(1010300, Disabled);
        EndEvent();
    }
    if (hpFlag3.Passed) {
        ForceAnimationPlayback(1010300, 7007, false, true, false);
        ChangeCharacterEnableState(1010300, Disabled);
        EndEvent();
    }
    SetCharacterImmortality(1010300, Disabled);
    ForceCharacterDeath(1010300, true);
});

$Event(11010790, Restart, function() {
    SetCharacterGravity(1010302, Disabled);
    SetCharacterInvincibility(1010302, Enabled);
    ChangeCharacterEnableState(1010302, Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetNetworkUpdateAuthority(1010302, AuthorityLevel.Forced);
    }
    EndIf(ThisEvent());
    WaitFor(InArea(10000, 1012301));
    SetEventFlag(11010790, ON);
    SetNetworkUpdateRate(1010302, true, CharacterUpdateFrequency.AlwaysUpdate);
    ActivateHit(1013200, Disabled);
    ChangeCharacterEnableState(1010302, Enabled);
    IssueShortWarpRequest(1010302, TargetEntityType.Area, 1012300, -1);
    ForceAnimationPlayback(1010302, 7012, false, true, false);
    ChangeCharacterEnableState(1010302, Disabled);
    ActivateHit(1013200, Enabled);
});

$Event(11010791, Default, function() {
    EndIf(ThisEvent());
    WaitFor(
        !EventFlag(11015310)
            && EventFlag(11010790)
            && !EventFlag(11010782)
            && HPRatio(1010300) >= 0.1
            && InArea(10000, 1012305)
            && !AllPlayersInArea(1012337)
            && !CharacterType(10000, TargetType.BlackPhantom));
    SetEventFlag(11015310, ON);
    SetEventFlag(11010791, ON);
    SetEventFlag(11010780, ON);
    ChangeCharacterEnableState(1010300, Enabled);
    IssueShortWarpRequest(1010300, TargetEntityType.Area, 1012302, -1);
    SetSpecialAnimations(1010300, 7006, -1, -1, -1, -1);
    ForceAnimationPlayback(1010300, 7005, false, false, false);
    WaitFixedTimeFrames(395);
    IssueShortWarpRequest(1010300, TargetEntityType.Area, 1012310, -1);
    SetEventFlag(11015310, OFF);
});

$Event(11010780, Default, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(1011290, 2);
        EndEvent();
    }
    WaitFor(CharacterHasEventMessage(1010300, 1000));
    ForceAnimationPlayback(1011290, 1, false, true, false);
    ForceAnimationPlayback(1011290, 2, true, false, false);
});

$Event(11010784, Restart, function() {
    WaitFor(CharacterHasEventMessage(1010300, 500));
    SetEventFlag(11015300, ON);
    WaitFor(CharacterHasEventMessage(1010300, 600));
    SetEventFlag(11015300, OFF);
    RestartEvent();
});

$Event(11015301, Restart, function() {
    ChangeCharacterEnableState(1010301, Disabled);
    WaitFor(CharacterBackreadStatus(1010300));
    if (ThisEvent()) {
        ChangeCharacterDispmask(1010300, 0, OFF);
        ChangeCharacterHitmask(1010300, 1, ON);
        RequestCharacterAICommand(1010300, 20, 0);
        EndEvent();
    }
    CreateNPCPart(1010300, 3430, NPCPartType.Part1, 200, 1, 1, false, false);
    hpFlagDmg = NPCPartHP(1010300, 3430) <= 0
        && !EventFlag(11015300)
        && CharacterDamagedBy(1010300, 10000)
        && HPRatio(1010300) >= 0.1;
    chr = CharacterDead(1010300);
    WaitFor(hpFlagDmg || chr);
    EndIf(chr.Passed);
    if (!EventFlag(11015311)) {
        ForceAnimationPlayback(1010300, 8000, false, false, false);
    } else {
        ForceAnimationPlayback(1010300, 8010, false, false, false);
    }
    WaitFor(CharacterHasEventMessage(1010300, 400));
    ChangeCharacterDispmask(1010300, 0, OFF);
    ChangeCharacterHitmask(1010300, 1, ON);
    WarpCharacterAndCopyFloor(1010301, TargetEntityType.Character, 1010300, 66, 1010300);
    ChangeCharacterEnableState(1010301, Enabled);
    ForceAnimationPlayback(1010301, 8100, false, false, false);
    RequestCharacterAICommand(1010300, 20, 0);
    RequestCharacterAIReplan(1010300);
    EndIf(!(CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.Hollow)));
    AwardItemsIncludingClients(34310000);
});

$Event(11015302, Default, function() {
    onlineChrFlagHp = (HasMultiplayerState(MultiplayerState.Host) || CharacterType(10000, TargetType.WhitePhantom))
        && !EventFlag(11015310)
        && EventFlag(11010791)
        && !EventFlag(11015311)
        && HPRatio(1010300) >= 0.1;
    onlineChrFlagHpArea = onlineChrFlagHp && EventFlag(11010100) && InArea(10000, 1012330);
    onlineChrFlagHpArea2 = onlineChrFlagHp && InArea(10000, 1012331);
    onlineChrFlagHpArea3 = onlineChrFlagHp && EventFlag(11010100) && InArea(10000, 1012332);
    onlineChrFlagHpArea4 = onlineChrFlagHp && InArea(10000, 1012333);
    onlineChrFlagHp2 = onlineChrFlagHp && EventFlag(11015305);
    onlineChrFlagHp3 = onlineChrFlagHp && EventFlag(11015317);
    WaitFor(
        onlineChrFlagHpArea
            || onlineChrFlagHpArea2
            || onlineChrFlagHpArea3
            || onlineChrFlagHpArea4
            || onlineChrFlagHp2
            || onlineChrFlagHp3);
    SetEventFlag(11015310, ON);
    if (onlineChrFlagHpArea.Passed) {
        SetEventFlag(11015350, ON);
    }
    if (onlineChrFlagHpArea2.Passed) {
        SetEventFlag(11015351, ON);
    }
    if (onlineChrFlagHpArea3.Passed) {
        SetEventFlag(11015352, ON);
    }
    if (onlineChrFlagHpArea4.Passed) {
        SetEventFlag(11015353, ON);
    }
    GotoIf(S0, onlineChrFlagHp2.Passed);
    GotoIf(S0, onlineChrFlagHp3.Passed);
    Goto(S1);
S0:
    SetEventFlag(11015354, ON);
S1:
    BatchSetEventFlags(11015320, 11015339, OFF);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        RandomlySetEventFlagInRange(11015320, 11015339, ON);
        SetEventFlag(11015313, ON);
    }
    RestartEvent();
});

$Event(11010805, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && EventFlag(11015310)
            && EventFlag(X12_4)
            && AnyBatchEventFlags(X0_4, X4_4)
            && HPRatio(1010300) > 0.1);
    RestartIf(EventFlag(11015311));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueShortWarpRequest(1010300, TargetEntityType.Area, 1012310, -1);
    }
    if (X8_4 == 7011) {
        SetEventFlag(11015312, ON);
        SetSpEffect(1010300, 4160);
    }
    if (X8_4 != 7006) {
        ForceAnimationPlayback(1010300, X8_4, false, false, false);
    }
    if (X8_4 == 7004) {
        WaitFixedTimeFrames(190);
    }
    if (X8_4 == 7006) {
        WaitFixedTimeFrames(90);
    }
    if (X8_4 == 7008) {
        WaitFixedTimeFrames(200);
    }
    if (X8_4 == 7009) {
        WaitFixedTimeFrames(180);
    }
    if (X8_4 == 7011) {
        WaitFixedTimeFrames(192);
    }
    ClearSpEffect(1010300, 4160);
    IssueShortWarpRequest(1010300, TargetEntityType.Area, 1012310, -1);
    BatchSetEventFlags(11015350, 11015354, OFF);
    BatchSetEventFlags(11015320, 11015339, OFF);
    SetEventFlag(X12_4, OFF);
    SetEventFlag(11015312, OFF);
    SetEventFlag(11015310, OFF);
    RestartEvent();
});

$Event(11010800, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && EventFlag(11015310)
            && EventFlag(X12_4)
            && AnyBatchEventFlags(X0_4, X4_4)
            && HPRatio(1010300) > 0.1);
    RestartIf(EventFlag(11015311));
    SetEventFlag(11015311, ON);
    SetCharacterMapHits(1010300, false);
    SetCharacterGravity(1010300, Enabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueShortWarpRequest(1010300, TargetEntityType.Area, 1012310, -1);
    }
    SetSpecialAnimations(1010300, -1, -1, -1, -1, -1);
    SetCharacterDefaultBackreadState(1010300, Enabled);
    SetNetworkUpdateRate(1010300, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetSpEffect(1010300, 4160);
    ForceAnimationPlayback(1010300, X8_4, false, false, false);
    WaitFixedTimeFrames(111);
    ClearSpEffect(1010300, 4160);
    SetCharacterDefaultBackreadState(1010300, Disabled);
    BatchSetEventFlags(11015350, 11015354, OFF);
    BatchSetEventFlags(11015320, 11015339, OFF);
    SetEventFlag(X12_4, OFF);
    SetEventFlag(11015317, OFF);
    SetEventFlag(11015310, OFF);
    RestartEvent();
});

$Event(11010890, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    flag = EventFlag(11015313) && EventFlag(X0_4);
    flag2 = EventFlag(11015313) && EventFlag(X4_4);
    flag3 = EventFlag(11015313) && EventFlag(X8_4);
    flag4 = EventFlag(11015313) && EventFlag(X12_4);
    flag5 = EventFlag(11015313) && EventFlag(X16_4);
    flag6 = EventFlag(11015313) && EventFlag(X20_4);
    flag7 = EventFlag(11015313) && EventFlag(X24_4);
    WaitFor(flag || flag2 || flag3 || flag4 || flag5 || flag6 || flag7);
    SetEventFlag(11015313, OFF);
    if (flag.Passed) {
        SetEventFlag(X0_4, ON);
    }
    if (flag2.Passed) {
        SetEventFlag(X4_4, ON);
    }
    if (flag3.Passed) {
        SetEventFlag(X8_4, ON);
    }
    if (flag4.Passed) {
        SetEventFlag(X12_4, ON);
    }
    if (flag5.Passed) {
        SetEventFlag(X16_4, ON);
    }
    if (flag6.Passed) {
        SetEventFlag(X20_4, ON);
    }
    if (flag7.Passed) {
        SetEventFlag(X24_4, ON);
    }
    RestartEvent();
});

$Event(11015303, Default, function() {
    flagArea = !EventFlag(11015306)
        && !EventFlag(11015311)
        && EventFlag(11010791)
        && EventFlag(11010100)
        && (InArea(10000, 1012332) || InArea(10000, 1012335) || InArea(10000, 1012336));
    flagArea2 = EventFlag(11015306)
        && !EventFlag(11015311)
        && EventFlag(11010791)
        && !AllPlayersInArea(1012332)
        && !AllPlayersInArea(1012335)
        && !AllPlayersInArea(1012336);
    WaitFor(flagArea || flagArea2);
    if (!flagArea2.Passed) {
        SetEventFlag(11015306, ON);
        RestartEvent();
    }
    SetEventFlag(11015306, OFF);
    SetEventState(11015304, 0, EventEndType.Restart);
    RestartEvent();
});

$Event(11015304, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(!EventFlag(11015305) && EventFlag(11015306));
    WaitFixedTimeSeconds(20);
    SetEventFlag(11015305, ON);
    RestartEvent();
});

$Event(11010850, Default, function() {
    WaitFor(
        EventFlag(11010791)
            && !EventFlag(11015311)
            && HPRatio(1010300) >= 0.1
            && CharacterDamagedBy(1010300, 10000));
    SetEventFlag(11015317, ON);
    RestartEvent();
});

$Event(11010851, Default, function() {
    flagAreaHp = !EventFlag(11015316)
        && EventFlag(11010791)
        && !EventFlag(11015311)
        && !AllPlayersInArea(1012338)
        && HPRatio(1010300) < 0.7
        && HPRatio(1010300) >= 0.1;
    flagArea = EventFlag(11015316) && EventFlag(11010791) && InArea(10000, 1012338);
    WaitFor(flagAreaHp || flagArea);
    if (!flagArea.Passed) {
        SetEventFlag(11015316, ON);
        RestartEvent();
    }
    SetEventFlag(11015316, OFF);
    SetEventState(11010852, 0, EventEndType.Restart);
    RestartEvent();
});

$Event(11010852, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(!EventFlag(11015315) && EventFlag(11015316));
    WaitFixedTimeSeconds(60);
    SetEventFlag(11015315, ON);
    RestartEvent();
});

$Event(11015307, Restart, function() {
    WaitFor(
        !EventFlag(11015310)
            && EventFlag(11010791)
            && EventFlag(11015311)
            && HPRatio(1010300) >= 0.1);
    SetCharacterAIState(1010300, Enabled);
    ClearCharactersAITarget(1010300);
    RequestCharacterAIReplan(1010300);
    SetCharacterHome(1010300, 1012320);
    WaitFor(CharacterHasEventMessage(1010300, 700));
    IssueShortWarpRequest(1010300, TargetEntityType.Area, 1012340, -1);
    SetSpecialAnimations(1010300, 7006, -1, -1, -1, -1);
    ForceAnimationPlayback(1010300, 7016, false, false, false);
    WaitFixedTimeFrames(110);
    IssueShortWarpRequest(1010300, TargetEntityType.Area, 1012310, -1);
    RequestCharacterAICommand(1010300, -1, 1);
    SetCharacterAIState(1010300, Disabled);
    ClearCharactersAITarget(1010300);
    RequestCharacterAIReplan(1010300);
    SetEventFlag(11015305, OFF);
    SetEventFlag(11015309, OFF);
    SetEventFlag(11015311, OFF);
    RestartEvent();
});

$Event(11015308, Default, function() {
    flagHpArea = !EventFlag(11015309)
        && !EventFlag(11015310)
        && EventFlag(11010791)
        && HPRatio(1010300) >= 0.1
        && !AllPlayersInArea(1012334);
    flagHpArea2 = EventFlag(11015309)
        && !EventFlag(11015310)
        && EventFlag(11010791)
        && HPRatio(1010300) >= 0.1
        && InArea(10000, 1012334);
    WaitFor(flagHpArea || flagHpArea2);
    if (!flagHpArea2.Passed) {
        SetEventFlag(11015309, ON);
        RequestCharacterAICommand(1010300, 1, 1);
        ClearCharactersAITarget(1010300);
        RequestCharacterAIReplan(1010300);
        RestartEvent();
    }
    SetEventFlag(11015309, OFF);
    RequestCharacterAICommand(1010300, -1, 1);
    ClearCharactersAITarget(1010300);
    RequestCharacterAIReplan(1010300);
    RestartEvent();
});

$Event(11010782, Default, function() {
    WaitFor(
        !EventFlag(11015310)
            && EventFlag(11010790)
            && EventFlag(11010791)
            && !EventFlag(11015311)
            && !CharacterType(10000, TargetType.BlackPhantom)
            && InArea(10000, 1012337));
    WaitFixedTimeFrames(10);
    RestartIf(EventFlag(11015311));
    SetEventFlag(11015310, ON);
    SetEventFlag(11015312, ON);
    SetEventFlag(11010791, OFF);
    SetNetworkUpdateRate(1010300, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(1010300, 7013, false, true, false);
    ChangeCharacterEnableState(1010300, Disabled);
    WarpCharacterAndSetFloor(1010300, TargetEntityType.Area, 1012310, -1, 1013210);
});

$Event(11010783, Default, function() {
    WaitFor(
        !EventFlag(11015310)
            && EventFlag(11010790)
            && EventFlag(11010791)
            && !EventFlag(11015311)
            && EventFlag(11015315));
    SetEventFlag(11015310, ON);
    SetSpecialAnimations(1010300, 7018, -1, -1, -1, -1);
    ForceAnimationPlayback(1010300, 7017, false, true, false);
    WaitFor(HPRatio(1010300) >= 0.7);
    SetSpecialAnimations(1010300, 7006, -1, -1, -1, -1);
    ForceAnimationPlayback(1010300, 7019, false, false, false);
    WaitFixedTimeFrames(50);
    SetEventFlag(11015315, OFF);
    SetEventFlag(11015316, OFF);
    SetEventFlag(11015310, OFF);
    RestartEvent();
});

$Event(11010200, Default, function(X0_4, X4_4) {
    WaitFor(CharacterBackreadStatus(1010300) && CharacterHasEventMessage(1010300, X0_4));
    HellkiteBreathControl(1010300, 1011060, X4_4);
    WaitFor(!CharacterHasEventMessage(1010300, X0_4));
    RestartEvent();
});

$Event(11010510, Default, function(X0_4, X4_4) {
    hpDmg = HPRatio(X0_4) <= 0.9 && HPRatio(X0_4) > 0 && CharacterDamagedBy(X0_4, 10000);
    flag = EventFlag(X4_4) && ThisEventSlot();
    flag2 = EventFlag(X4_4) && !ThisEventSlot();
    WaitFor(hpDmg || flag || flag2);
    if (flag2.Passed) {
        ChangeCharacterEnableState(X0_4, Disabled);
        WaitFor(EventFlag(703));
    }
    SetEventFlag(X4_4, ON);
    ChangeCharacterTeamTypeAndForceExitSpecialAnimations(X0_4, TeamType.HostileAlly);
    SaveRequest(0);
    RestartIf(!ThisEventSlot());
    WaitFor(EventFlag(744));
    SetEventFlag(744, ON);
    WaitFor(!EventFlag(744));
    RestartEvent();
});

$Event(11010520, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        ForceCharacterTreasure(X0_4);
        EndEvent();
    }
    WaitFor(HPRatio(X0_4) <= 0);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
});

$Event(11010501, Default, function(X0_4, X4_4) {
    WaitFor(
        (!EventFlag(1176)
            && !EventFlag(1179)
            && EventFlag(1175)
            && HPRatio(X0_4) <= 0.9
            && HPRatio(X0_4) > 0
            && CharacterDamagedBy(X0_4, 10000))
            || (EventFlag(X4_4) && ThisEvent()));
    SetEventFlag(X4_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
    ChangeCharacterTeamTypeAndForceExitSpecialAnimations(X0_4, TeamType.HostileAlly);
    SetCharacterAIId(X0_4, 1);
    SaveRequest(0);
    RestartIf(!ThisEvent());
    WaitFor(EventFlag(744));
    WaitFor(!EventFlag(744));
    RestartEvent();
});

$Event(11010530, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(!EventFlag(1004) && EventFlag(1000) && EventFlag(11010591));
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
});

$Event(11010531, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(!EventFlag(1004) && EventFlag(1008) && EventFlag(11510594));
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    WarpCharacterAndSetFloor(X0_4, TargetEntityType.Area, 1012530, -1, 1013050);
    SetCharacterHome(X0_4, 1012530);
    ChangeCharacterEnableState(X0_4, Enabled);
});

$Event(11010532, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(!EventFlag(1114) && EventFlag(1110) && EventFlag(11010181));
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    SetSpecialAnimations(X0_4, -1, -1, -1, -1, -1);
});

$Event(11010533, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(!EventFlag(1176) && !EventFlag(1179) && EventFlag(1174) && EventFlag(11310590));
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
    ClearEventValue(600, 4);
});

$Event(11010534, Default, function(X0_4, X4_4, X8_4, X12_4) {
    flagChr = !EventFlag(1176)
        && !EventFlag(1179)
        && EventFlag(1175)
        && EventFlag(724)
        && !CharacterDead(X0_4)
        && !ThisEvent();
    WaitFor(
        flagChr
            || (HasMultiplayerState(MultiplayerState.Host)
                && !EventFlag(1176)
                && !EventFlag(1177)
                && !EventFlag(1179)
                && !EventFlag(1180)
                && ThisEvent()));
    EndIf(flagChr.Passed);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Disabled);
});

$Event(11010535, Default, function(X0_4, X4_4, X8_4, X12_4) {
    flagHp = !EventFlag(1176) && (EventFlag(1175) || EventFlag(1179)) && HPRatio(X0_4) <= 0 && !ThisEvent();
    WaitFor(flagHp || (EventFlag(1180) && ThisEvent()));
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    EndIf(flagHp.Passed);
    ForceCharacterTreasure(X0_4);
});

$Event(11010537, Default, function(X0_4, X4_4, X8_4, X12_4) {
    flag = !EventFlag(1176)
        && !EventFlag(1179)
        && EventFlag(1175)
        && !EventFlag(1196)
        && !EventFlag(1198)
        && EventValue(600, 4) >= 2
        && !ThisEvent();
    flag2 = EventFlag(703);
    flag3 = EventFlag(11010599) && EventFlag(X12_4) && ThisEvent();
    WaitFor(flag || flag2 || flag3 || (!EventFlag(11010599) && EventFlag(X12_4) && ThisEvent()));
    GotoIf(S0, flag3.Passed);
    GotoIf(S1, !flag.Passed);
    SetEventFlag(11010599, ON);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetEventFlag(50006070, ON);
        SetEventFlag(50006071, OFF);
        SetEventFlag(50006080, OFF);
    }
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
S0:
    ForceCharacterTreasure(X0_4);
    EndEvent();
S1:
    if (flag2.Passed) {
        BatchSetEventFlags(X4_4, X8_4, OFF);
        SetEventFlag(X12_4, ON);
        EndEvent();
    }
    ForceCharacterTreasure(X0_4);
});

$Event(11010538, Default, function() {
    WaitFor(!EventFlag(1176) && !EventFlag(1179) && EventFlag(1175) && EventFlag(11010596));
    SetEventFlag(11010596, OFF);
    ClearEventValue(600, 4);
    RestartEvent();
});

$Event(11010539, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(1177) && EventFlag(50006071));
    SetEventFlag(815, ON);
});

$Event(11010550, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(!EventFlag(1574) && EventFlag(1570) && EventFlag(11010190) && !CharacterDead(X0_4));
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    SetEventFlag(11010584, ON);
});

$Event(11010551, Default, function() {
    EndIf(EventFlag(11010593));
    DeactivateObjactAssignIndex(1011308, -1, 0, Disabled);
    DeactivateObjactAssignIndex(1011308, -1, 1, Disabled);
    DeactivateObjactAssignIndex(1011308, -1, 2, Disabled);
    DeactivateObjactAssignIndex(1011308, -1, 3, Disabled);
    WaitFor(EventFlag(11010593));
    DeactivateObjactAssignIndex(1011308, -1, 0, Enabled);
    DeactivateObjactAssignIndex(1011308, -1, 1, Enabled);
});

$Event(11010552, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(
        !EventFlag(1574) && EventFlag(1570) && (EventFlag(3) || (EventFlag(812) && EventFlag(813))));
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Disabled);
});

$Event(11010581, Default, function(X0_4) {
    EndIf(ThisEvent());
    WaitFor(EventFlag(11010700));
    ChangeCharacterEnableState(X0_4, Enabled);
});

$Event(11010582, Restart, function() {
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetEventFlag(11010586, OFF);
    }
    if (!EventFlag(11010586)) {
        WaitFor(EventFlag(1175) || EventFlag(1179) || EventFlag(1181));
    }
    SetEventFlag(11010586, ON);
    ChangeCharacterEnableState(1010320, Disabled);
});

$Event(11010583, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(744));
    WaitFor(!EventFlag(744));
    WaitFixedTimeSeconds(1);
    IssueShortWarpRequest(6001, TargetEntityType.Area, 1012010, -1);
    SetSpecialAnimations(6001, 7845, -1, -1, -1, -1);
    IssueShortWarpRequest(6040, TargetEntityType.Area, 1012011, -1);
    IssueShortWarpRequest(6072, TargetEntityType.Area, 1012012, -1);
    SetSpecialAnimations(6072, 7880, -1, -1, -1, -1);
    IssueShortWarpRequest(6190, TargetEntityType.Area, 1012013, -1);
    SetSpecialAnimations(6190, 9000, -1, -1, -1, -1);
    SetEventFlag(11015090, OFF);
    RequestObjectRestoration(1011010);
    SetEventState(11015090, 0, EventEndType.Restart);
    IssueShortWarpRequest(6230, TargetEntityType.Area, 1012014, -1);
    SetSpecialAnimations(6230, 9000, -1, -1, -1, -1);
    IssueShortWarpRequest(6300, TargetEntityType.Area, 1012015, -1);
    SetSpecialAnimations(6300, 7825, -1, -1, -1, -1);
    RestartEvent();
});

$Event(11010580, Default, function() {
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.Hollow);
    chrFlag = chr && EventFlag(11015030) && !EventFlag(11015031);
    WaitFor(chrFlag || (chr && !EventFlag(11015030) && EventFlag(11015031)));
    WaitForNetworkApproval(3);
    if (chrFlag.Passed) {
        SetSpEffect(10000, 4170);
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            RotateCharacter(10000, 6480);
        }
        GotoIf(S0, HasMultiplayerState(MultiplayerState.Host));
        GotoIf(S1, !ThisEvent());
S0:
        ForceAnimationPlayback(10000, 7895, false, true, false);
S1:
        ForceAnimationPlayback(10000, 7896, true, false, false);
        SetEventFlag(11015031, ON);
        RestartEvent();
    }
    ClearSpEffect(10000, 4170);
    GotoIf(S2, HasMultiplayerState(MultiplayerState.Host));
    GotoIf(S3, !ThisEvent());
S2:
    ForceAnimationPlayback(10000, 7897, false, true, false);
S3:
    SetEventFlag(11015031, OFF);
    RestartEvent();
});

$Event(11010585, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFixedTimeFrames(2);
    SetEventFlag(11010580, ON);
});

$Event(11015090, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X0_4));
    EndIf(EventFlag(X4_4));
    SetObjectInvulnerability(X8_4, Enabled);
    WaitFor(EventFlag(X0_4) || EventFlag(X4_4));
    SetObjectInvulnerability(X8_4, Disabled);
    WaitFixedTimeFrames(1);
    RequestObjectDestruction(X8_4, 1);
    PlaySE(X8_4, SoundType.oObject, 125200000);
    SetEventFlag(11015090, ON);
    WaitFor(EventFlag(703));
    EndEvent();
});

$Event(11015100, Default, function() {
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetNetworkUpdateAuthority(6540, AuthorityLevel.Forced);
    }
    if (ThisEvent()) {
        ChangeCharacterEnableState(6001, Disabled);
    }
    GotoIf(S0, EventFlag(11015106));
    GotoIf(S1, HasMultiplayerState(MultiplayerState.Client) && EventFlag(11015102));
S0:
    ChangeCharacterEnableState(6540, Disabled);
S1:
    EndIf(EventFlag(3));
    WaitFor(
        MultiplayerCount(5, 2)
            && HasMultiplayerState(MultiplayerState.Host)
            && CharacterType(10000, TargetType.Alive)
            && !EventFlag(11015102)
            && !EventFlag(11015106)
            && !(EventFlag(1004)
                || EventFlag(1005)
                || EventFlag(1006)
                || EventFlag(1010)
                || EventFlag(1011))
            && CharacterBackreadStatus(6540));
    PlaceNPCSummonSign(SummonSignType.WhiteSign, 6540, 1012000, 11015102, 11015106);
    ChangeCharacterEnableState(6001, Disabled);
});

$Event(11015101, Default, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(11015102) && EventFlag(11015393));
    RequestCharacterAICommand(6540, 10, 0);
    RequestCharacterAIReplan(6540);
    WaitFor(InArea(6540, 1012998));
    RotateCharacter(6540, 1012997);
    ForceAnimationPlayback(6540, 7410, false, false, false);
    RequestCharacterAICommand(6540, -1, 0);
    RequestCharacterAIReplan(6540);
});

$Event(11015103, Default, function() {
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetNetworkUpdateAuthority(6590, AuthorityLevel.Forced);
    }
    GotoIf(S0, EventFlag(11015107));
    GotoIf(S1, HasMultiplayerState(MultiplayerState.Client) && EventFlag(11015105));
S0:
    ChangeCharacterEnableState(6590, Disabled);
S1:
    EndIf(EventFlag(3));
    WaitFor(
        MultiplayerCount(5, 2)
            && HasMultiplayerState(MultiplayerState.Host)
            && CharacterType(10000, TargetType.Alive)
            && !EventFlag(11015105)
            && !EventFlag(11015107)
            && EventFlag(11020607)
            && (EventFlag(1572) || EventFlag(1573))
            && !EventFlag(1574)
            && CharacterBackreadStatus(6590)
            && EntityInRadiusOfEntity(6590, 10000, 20));
    PlaceNPCSummonSign(SummonSignType.WhiteSign, 6590, 1012001, 11015105, 11015107);
});

$Event(11015203, Default, function() {
    WaitFor(EventFlag(11015105));
    SetSpEffect(6590, 5450);
});

$Event(11015104, Default, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(11015105) && EventFlag(11015393));
    RequestCharacterAICommand(6590, 10, 0);
    RequestCharacterAIReplan(6590);
    WaitFor(InArea(6590, 1012998));
    RotateCharacter(6590, 1012997);
    ForceAnimationPlayback(6590, 7410, false, false, false);
    RequestCharacterAICommand(6590, -1, 0);
    RequestCharacterAIReplan(6590);
});

$Event(11015900, Default, function() {
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetNetworkUpdateAuthority(6540, AuthorityLevel.Forced);
    }
    if (ThisEvent()) {
        ChangeCharacterEnableState(6001, Disabled);
    }
    GotoIf(S0, EventFlag(11015106));
    GotoIf(S1, HasMultiplayerState(MultiplayerState.Client) && EventFlag(11015102));
S0:
    ChangeCharacterEnableState(6540, Disabled);
S1:
    EndIf(EventFlag(3));
    WaitFor(
        MultiplayerCount(4, 3)
            && HasMultiplayerState(MultiplayerState.Host)
            && CharacterType(10000, TargetType.Alive)
            && !EventFlag(11015102)
            && !EventFlag(11015106)
            && !(EventFlag(1004)
                || EventFlag(1005)
                || EventFlag(1006)
                || EventFlag(1010)
                || EventFlag(1011))
            && CharacterBackreadStatus(6540)
            && CharacterHasSpEffect(10000, 28));
    PlaceNPCSummonSign(SummonSignType.WhiteSign, 6540, 1012000, 11015102, 11015106);
    ChangeCharacterEnableState(6001, Disabled);
});

$Event(11015901, Default, function() {
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetNetworkUpdateAuthority(6590, AuthorityLevel.Forced);
    }
    GotoIf(S0, EventFlag(11015107));
    GotoIf(S1, HasMultiplayerState(MultiplayerState.Client) && EventFlag(11015105));
S0:
    ChangeCharacterEnableState(6590, Disabled);
S1:
    EndIf(EventFlag(3));
    WaitFor(
        MultiplayerCount(4, 3)
            && HasMultiplayerState(MultiplayerState.Host)
            && CharacterType(10000, TargetType.Alive)
            && !EventFlag(11015105)
            && !EventFlag(11015107)
            && EventFlag(11020607)
            && (EventFlag(1572) || EventFlag(1573))
            && !EventFlag(1574)
            && CharacterBackreadStatus(6590)
            && EntityInRadiusOfEntity(6590, 10000, 20)
            && CharacterHasSpEffect(10000, 28));
    PlaceNPCSummonSign(SummonSignType.WhiteSign, 6590, 1012001, 11015105, 11015107);
});

$Event(11015990, Default, function(X0_4, X4_4) {
    WaitFor(EventFlag(X0_4));
    EraseNPCSummonSignDs1rOnly(X4_4);
    WaitFor(!EventFlag(X0_4));
    RestartEvent();
});

$Event(11015843, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && HasMultiplayerState(MultiplayerState.Multiplayer)
            && EventFlag(X0_4)
            && ActionButtonLineSegmentBossRoom(TargetEntityType.Area, X8_4, 0, -1, 0, 10010403, ReactionType.HollowHuman, 0, X4_4));
    RotateCharacter(10000, X12_4);
    ForceAnimationPlayback(10000, 7410, false, true, false);
    Unknown200347Ds1rOnly();
    RestartEvent();
});

$Event(11015846, Default, function(X0_4, X4_4, X8_4) {
    WaitFor(
        (HasMultiplayerState(MultiplayerState.Multiplayer)
            || HasMultiplayerState(MultiplayerState.UNKNOWN5DS1RONLY))
            && EventFlag(X0_4));
    DeactivateObject(X4_4, Enabled);
    SpawnMapSFX(X8_4);
    WaitFor(
        !HasMultiplayerState(MultiplayerState.UNKNOWN5DS1RONLY)
            && HasMultiplayerState(MultiplayerState.Singleplayer));
    DeactivateObject(X4_4, Disabled);
    DeleteMapSFX(X8_4, true);
    RestartEvent();
});

$Event(11014501, Default, function() {
    ChangeCharacterEnableState(1010700, Enabled);
});
