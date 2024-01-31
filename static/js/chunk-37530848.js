var Xr = Object.defineProperty;
var Yr = (e, t, n) =>
  t in e
    ? Xr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Ht = (e, t, n) => (Yr(e, typeof t != "symbol" ? t + "" : t, n), n);
import {
  l as Bn,
  M as Bt,
  j as G,
  m as Ge,
  I as Ne,
  g as Pe,
  c as Wn,
  e as _n,
  i as bo,
  f as ho,
  n as oe,
  P as re,
  h as te,
  u as ue,
  r as ye,
  k as zt,
} from "./chunk-201328a9.js";
import {
  a7 as Ae,
  _ as D,
  ah as Dn,
  w as Dt,
  an as In,
  aq as Jr,
  s as Ke,
  b as Kt,
  W as L,
  M as Ln,
  a as On,
  ap as Qr,
  I as Rn,
  n as Rt,
  c as U,
  r as a,
  au as ao,
  R as c,
  ax as co,
  o as eo,
  $ as fo,
  l as go,
  aw as io,
  g as j,
  U as lo,
  k as mo,
  ar as no,
  at as oo,
  m as po,
  as as ro,
  av as so,
  ad as to,
  ay as uo,
  az as vo,
  ao as xt,
  e as zn,
} from "./chunk-3aa3a6d5.js";
import { v as Xe } from "./chunk-5237112f.js";
import { d as Lt, g as je } from "./chunk-61361a5e.js";
async function xo(e) {
  return new Promise((t) => {
    const n = localStorage.getItem(e);
    try {
      const r = JSON.parse(n);
      t(r);
    } catch {
      t(n);
    }
  });
}
async function yt(e) {
  return new Promise((t, n) => {
    setTimeout(t, e);
  });
}
function yo(e) {
  return Rt({
    tag: "svg",
    attr: {
      version: "1",
      viewBox: "0 0 48 48",
      enableBackground: "new 0 0 48 48",
    },
    child: [
      {
        tag: "polygon",
        attr: {
          fill: "#8BC34A",
          points:
            "24,3 28.7,6.6 34.5,5.8 36.7,11.3 42.2,13.5 41.4,19.3 45,24 41.4,28.7 42.2,34.5 36.7,36.7 34.5,42.2 28.7,41.4 24,45 19.3,41.4 13.5,42.2 11.3,36.7 5.8,34.5 6.6,28.7 3,24 6.6,19.3 5.8,13.5 11.3,11.3 13.5,5.8 19.3,6.6",
        },
      },
      {
        tag: "polygon",
        attr: {
          fill: "#CCFF90",
          points: "34.6,14.6 21,28.2 15.4,22.6 12.6,25.4 21,33.8 37.4,17.4",
        },
      },
    ],
  })(e);
}
function Eo(e) {
  return Rt({
    tag: "svg",
    attr: {
      version: "1",
      viewBox: "0 0 48 48",
      enableBackground: "new 0 0 48 48",
    },
    child: [
      {
        tag: "path",
        attr: {
          fill: "#D50000",
          d: "M24,6C14.1,6,6,14.1,6,24s8.1,18,18,18s18-8.1,18-18S33.9,6,24,6z M24,10c3.1,0,6,1.1,8.4,2.8L12.8,32.4 C11.1,30,10,27.1,10,24C10,16.3,16.3,10,24,10z M24,38c-3.1,0-6-1.1-8.4-2.8l19.6-19.6C36.9,18,38,20.9,38,24C38,31.7,31.7,38,24,38 z",
        },
      },
    ],
  })(e);
}
function wo(e) {
  return Rt({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M247 24v15.2C134.4 43.81 43.81 134.4 39.2 247H24v18h15.2c4.61 112.6 95.2 203.2 207.8 207.8V488h18v-15.2c112.6-4.6 203.2-95.2 207.8-207.8H488v-18h-15.2C468.2 134.4 377.6 43.81 265 39.2V24h-18zm0 33.21V88h18V57.21C367.8 61.78 450.2 144.2 454.8 247H424v18h30.8c-4.6 102.8-87 185.2-189.8 189.8V424h-18v30.8c-102.8-4.6-185.22-87-189.79-189.8H88v-18H57.21C61.78 144.2 144.2 61.78 247 57.21zm9 52.79a64 64 0 0 0-64 64 64 64 0 0 0 38.1 58.5C172.6 280.9 161.9 349.6 176 406h160c14.1-56.4 3.3-125.2-54.1-173.6A64 64 0 0 0 320 174a64 64 0 0 0-64-64z",
        },
      },
    ],
  })(e);
}
const Co = Ke.div`
  display: ${({ isVisible: e }) => (e ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 9999;
  backdrop-filter: blur(5px);
  #funnelPreviewContainer {
    width: 90%;
    max-width: 35rem;
    height: 100%;
    border-radius: 0.25rem;
    padding: 1rem;
    box-shadow: 0px 0px 15px -5px black;
    background: var(--background-default);
    color: var(--primary);
    display: grid;
    grid-template-rows: 2rem 6rem 1fr 1fr 4rem;
    place-items: center;
    h1 {
      color: var(--primary-strong);
      font-size: 1.5rem;
    }
    .profilePic {
      fill: var(--avatar-placeholder-primary);
      background: var(--avatar-placeholder-background);
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      &.profilePicDefault {
        padding: 0.5rem;
        box-sizing: border-box;
      }
    }
    #funnelDetails {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      .detailContainer {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 0.25rem 0;
        .detailsIcon {
          width: 1.25rem;
          height: 1.25rem;
          margin-right: 0.5rem;
          fill: var(--primary);
        }
        span {
          font-size: 1.25rem;
          font-weight: 400;
          strong {
            font-weight: 700;
          }
        }
      }
    }
    #warningsContainer {
      width: 100%;
      height: 100%;
      font-size: 0.75rem;
      display: grid;
      place-items: center;
      filter: brightness(0.8);

      table {
        height: 100%;
        width: 100%;
        table-layout: fixed;
        border-radius: 0.5rem;
        overflow: hidden;
        thead {
          th {
            padding: 0.5rem 0;
            font-size: 1rem;
            font-weight: 700;
            border-bottom: 0.5px solid var(--secondary);
            &.can {
              background: ${U(0.9, "#09CAA7")};
            }
            &.cant {
              background: ${U(0.9, "#FF5151")};
            }
            &.shouldnt {
              background: ${U(0.9, "#EBC826")};
            }
            .thContainer {
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              .thIconsContainer {
                width: 1rem;
                height: 1rem;
                .thIcons {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
        tbody {
          tr {
            &:not(:last-child) {
              td {
                border-bottom: 0.5px solid var(--secondary);
              }
            }
            td {
              padding: 0.25rem 0.5rem;
              &.can {
                background: ${U(0.95, "#09CAA7")};
              }
              &.cant {
                background: ${U(0.95, "#FF5151")};
              }
              &.shouldnt {
                background: ${U(0.95, "#EBC826")};
              }
            }
          }
        }
      }
    }
    #actionContainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      button {
        width: 10rem;
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-size: 1rem;
        font-weight: 600;
        color: var(--primary);
        transition: filter 0.2s;
        &:hover {
          filter: brightness(1.2);
        }
        &#cancelBtn {
          background: ${U(0.3, "#FF5151")};
        }
        &#sendBtn {
          background: ${U(0.3, "#09CAA7")};
        }
      }
    }
  }
`;
let Ze = !1,
  _t = !1,
  ne;
const Et = {};
function Vn() {
  if (Ze) return;
  const n = window["webpackChunkwhatsapp_web_client"] || [],
    r = Date.now();
  n.push([
    [r],
    {},
    async (o) => {
      (ne = o), (Ze = !0);
      const i = new Array(1e4)
        .fill(1)
        .map((l, s) => l + s)
        .filter((l) => {
          const s = ne.u(l);
          return s.includes("undefined")
            ? !1
            : s.includes("locales")
            ? navigator.languages.some((u) => s.includes(`locales/${u}`))
            : !0;
        });
      await Promise.all(i.reverse().map((l) => ne.e(l))),
        (_t = !0),
        (window.ZVWAPI = await Mo());
    },
  ]);
}
Vn();
const ot = new Map();
function Un(e) {
  if (typeof ne.m[e] > "u") return "";
  if (ot.has(e)) return ot.get(e);
  const t = ne.m[e].toString();
  return ot.set(e, t), t;
}
const at = new Map();
function So(e) {
  if (at.has(e)) return at.get(e);
  const t = /\w+\.(Pure)?Component\s*\{/,
    n = Un(e),
    r = t.test(n);
  return at.set(e, r), r;
}
function $o(e, t = !1) {
  let n = Object.keys(ne.m);
  t && (n = n.reverse());
  const r = setTimeout(() => {}, 500);
  for (const o of n)
    if (!So(o))
      try {
        const i = ne(o);
        if (e(i, o)) return clearTimeout(r), o;
      } catch {
        continue;
      }
  n = Object.keys(Et);
  for (const o of n)
    try {
      const i = Et[o];
      if (e(i, o)) return o;
    } catch {
      continue;
    }
  return null;
}
function ko(e) {
  return /^\d+$/.test(e) ? ne(e) : Et[e];
}
const Po = [
  {
    id: "Store",
    conditions: (e) =>
      e.default && e.default.Chat && e.default.Msg ? e.default : null,
  },
  {
    id: "MediaCollection",
    conditions: (e) =>
      e.default &&
      e.default.prototype &&
      e.default.prototype.processAttachments !== void 0
        ? e.default
        : null,
  },
  { id: "MediaProcess", conditions: (e) => (e.BLOB ? e : null) },
  {
    id: "MediaPrep",
    conditions: (e) => (e.uploadProductImage && e.MediaPrep ? e : null),
  },
  {
    id: "OpaqueData",
    conditions: (e) => (e.default && e.default.createFromData ? e : null),
    properties: (e) => e.default,
  },
  {
    id: "ChatUtil",
    conditions: (e) => (e.sendClear && e.clearChat ? e : null),
  },
  {
    id: "GroupInvite",
    conditions: (e) => (e.sendQueryGroupInviteCode ? e : null),
  },
  { id: "Wap", conditions: (e) => (e.createGroup ? e : null) },
  {
    id: "ServiceWorker",
    conditions: (e) => (e.default && e.default.killServiceWorker ? e : null),
  },
  { id: "State", conditions: (e) => (e.STATE && e.STREAM ? e : null) },
  {
    id: "WapDelete",
    conditions: (e) =>
      e.sendConversationDelete && e.sendConversationDelete.length === 2
        ? e
        : null,
  },
  {
    id: "Conn",
    conditions: (e) =>
      (e.default && e.Conn) || (e.Conn && e.ConnImpl) ? e.default : null,
  },
  {
    id: "Clock",
    conditions: (e) =>
      e.Clock.globalUnixTime || e.default.globalUnixTime ? e : null,
  },
  { id: "Constants", conditions: (e) => (e.ACK.CLOCK === 0 ? e : null) },
  {
    id: "WapQuery",
    conditions: (e) =>
      e.default && e.default.queryExist && e.default.getCapabilities
        ? e.default
        : null,
  },
  { id: "CryptoLib", conditions: (e) => (e.decryptE2EMedia ? e : null) },
  {
    id: "OpenChat",
    conditions: (e) =>
      e.default && e.default.prototype && e.default.prototype.openChat
        ? e.default
        : null,
  },
  {
    id: "UserConstructor",
    conditions: (e) =>
      e.default &&
      e.default.prototype &&
      e.default.prototype.isServer &&
      e.default.prototype.isUser
        ? e.default
        : null,
  },
  {
    id: "sendTextMsgToChat",
    conditions: (e) => (e.sendTextMsgToChat ? e.sendTextMsgToChat : null),
  },
  { id: "SendSeen", conditions: (e) => (e.sendSeen ? e.sendSeen : null) },
  { id: "Archive", conditions: (e) => (e.setArchive ? e : null) },
  {
    id: "pinChat",
    conditions: (e) => (e.setPin.toString().includes(".unproxy") ? e : null),
  },
  { id: "sendDelete", conditions: (e) => (e.sendDelete ? e.sendDelete : null) },
  {
    id: "addAndSendMsgToChat",
    conditions: (e) => (e.addAndSendMsgToChat ? e.addAndSendMsgToChat : null),
  },
  {
    id: "sendMsgToChat",
    conditions: (e) => (e.sendMsgToChat ? e.sendMsgToChat : null),
  },
  { id: "Catalog", conditions: (e) => (e.Catalog ? e.Catalog : null) },
  {
    id: "Perfil",
    conditions: (e) =>
      e.__esModule === !0 && e.setPushname && !e.getComposeContents ? e : null,
  },
  {
    id: "MsgHandler",
    conditions: (e) =>
      e.default &&
      typeof e.default.toString == "function" &&
      e.default.toString().includes("Msg:out of order ack")
        ? e
        : null,
  },
  {
    id: "MsgKey",
    conditions: (e) =>
      e.default &&
      typeof e.default.toString == "function" &&
      e.default.toString().includes("MsgKey error: obj is null/undefined")
        ? e.default
        : null,
  },
  {
    id: "Parser",
    conditions: (e) => (e.convertToTextWithoutSpecialEmojis ? e.default : null),
  },
  {
    id: "Builders",
    conditions: (e) =>
      e.TemplateMessage && e.HydratedFourRowTemplate ? e : null,
  },
  { id: "Me", conditions: (e) => (e.PLATFORMS && e.Conn ? e.default : null) },
  {
    id: "CallUtils",
    conditions: (e) => (e.sendCallEnd && e.parseCall ? e : null),
  },
  {
    id: "Identity",
    conditions: (e) => (e.queryIdentity && e.updateIdentity ? e : null),
  },
  {
    id: "MyStatus",
    conditions: (e) => (e.getStatus && e.setMyStatus ? e : null),
  },
  {
    id: "ChatStates",
    conditions: (e) =>
      e.sendChatStatePaused &&
      e.sendChatStateRecording &&
      e.sendChatStateComposing
        ? e
        : null,
  },
  {
    id: "ChatPresence",
    conditions: (e) =>
      e.markComposing && e.markPaused && e.markRecording ? e : null,
  },
  {
    id: "GroupActions",
    conditions: (e) => (e.sendExitGroup && e.localExitGroup ? e : null),
  },
  {
    id: "Features",
    conditions: (e) => (e.FEATURE_CHANGE_EVENT && e.features ? e : null),
  },
  {
    id: "MessageUtils",
    conditions: (e) => (e.storeMessages && e.appendMessage ? e : null),
  },
  {
    id: "WebMessageInfo",
    conditions: (e) =>
      e.WebMessageInfo && e.WebFeatures ? e.WebMessageInfo : null,
  },
  {
    id: "createMessageKey",
    conditions: (e) =>
      e.createMessageKey && e.createDeviceSentMessage
        ? e.createMessageKey
        : null,
  },
  {
    id: "Participants",
    conditions: (e) =>
      e.addParticipants &&
      e.removeParticipants &&
      e.promoteParticipants &&
      e.demoteParticipants
        ? e
        : null,
  },
  {
    id: "WidFactory",
    conditions: (e) =>
      e.isWidlike && e.createWid && e.createWidFromWidLike ? e : null,
  },
  {
    id: "Base",
    conditions: (e) =>
      e.setSubProtocol && e.binSend && e.actionNode ? e : null,
  },
  {
    id: "Base2",
    conditions: (e) =>
      e.supportsFeatureFlags &&
      e.parseMsgStubProto &&
      e.binSend &&
      e.subscribeLiveLocation
        ? e
        : null,
  },
  {
    id: "Versions",
    conditions: (e) =>
      e.loadProtoVersions && e.default[15] && e.default[16] && e.default[17]
        ? e
        : null,
  },
  {
    id: "Sticker",
    conditions: (e) => (e.StickerCollection && e.default ? e : null),
  },
  {
    id: "MediaObject",
    conditions: (e) =>
      e.getOrCreateMediaObject && e.disassociateMediaFromStickerPack ? e : null,
  },
  {
    id: "MediaUpload",
    conditions: (e) => (e.default && e.default.mediaUpload ? e.default : null),
  },
  {
    id: "UploadUtils",
    conditions: (e) =>
      e.default && e.default.encryptAndUpload ? e.default : null,
  },
  {
    id: "Cmd",
    conditions: (e) => (e.default && e.default.openChatFromUnread ? e : null),
  },
  { id: "ReadSeen", conditions: (e) => (e.sendSeen ? e : null) },
  {
    id: "Block",
    conditions: (e) => (e.blockContact && e.unblockContact ? e : null),
  },
  { id: "BlockList", conditions: (e) => (e.BlocklistCollection ? e : null) },
  { id: "Theme", conditions: (e) => (e.getTheme && e.setTheme ? e : null) },
  { id: "Vcard", conditions: (e) => (e.vcardFromContactModel ? e : null) },
  {
    id: "Profile",
    conditions: (e) => (e.sendSetPicture && e.requestDeletePicture ? e : null),
  },
  { id: "SendMute", conditions: (e) => (e.sendConversationMute ? e : null) },
  { id: "Validators", conditions: (e) => (e.findLinks ? e : null) },
  { id: "Wap2", conditions: (e) => (e.Wap ? e : null) },
  { id: "LinkPreview", conditions: (e) => (e.findFirstWebLink ? e : null) },
  {
    id: "fetchLinkPreview",
    conditions: (e, t) => {
      if (e.getLinkPreview && !e.getAck) return !0;
      const n = Un(t);
      return (
        n.includes(".genMinimalLinkPreview") &&
        n.includes(".getProductOrCatalogLinkPreview")
      );
    },
    properties: (e) => e.getLinkPreview || e.default,
  },
  {
    id: "genId",
    conditions: (e) =>
      e.default &&
      typeof e.default == "function" &&
      typeof e.default.toString == "function" &&
      e.default.toString().match(/crypto/)
        ? e
        : null,
  },
  {
    id: "GroupMetadata",
    conditions: (e) => (e.default && e.default.handlePendingInvite ? e : null),
  },
  {
    id: "i10n",
    conditions: (e) =>
      e.default && e.default.downloadAppLocale ? e.default : null,
  },
  {
    id: "NetworkStatus",
    conditions: (e) =>
      e.default && e.default._logOnlineOffline ? e.default : null,
  },
  {
    id: "Stream",
    conditions: (e) => (e.default && e.default.unobscure ? e.default : null),
  },
  {
    id: "ws2",
    conditions: (e) =>
      e.default && e.default.destroyStorage ? e.default : null,
  },
  {
    id: "BlobCache",
    conditions: (e) =>
      e.default && e.default.getOrCreateURL ? e.default : null,
  },
  { id: "UserPrefs", conditions: (e) => (e.getMaybeMeUser ? e : null) },
  {
    id: "randomMessageId",
    conditions: (e) => (e.randomId || e.default.randomId ? e : null),
  },
  { id: "sendSetGroupSubject", conditions: (e) => e.sendSetGroupSubject },
  { id: "sendSetGroupProperty", conditions: (e) => e.sendSetGroupProperty },
  {
    id: "sendSetGroupDescription",
    conditions: (e) => e.sendSetGroupDescription,
  },
  {
    id: "changeEphemeralDuration",
    conditions: (e) => e.changeEphemeralDuration,
  },
  { id: "sendCallSignalingMsg", conditions: (e) => e.sendCallSignalingMsg },
  {
    id: "sendQueryExists",
    conditions: (e) =>
      (e.queryExists && e.queryPhoneExists) ||
      (e.queryWidExists && e.queryPhoneExists),
    properties: (e) => e.queryExists || e.queryWidExists,
  },
  { id: "findChat", conditions: (e) => (e.findChat ? e.findChat : null) },
  { id: "sendCreateGroup", conditions: (e) => e.sendCreateGroup },
  {
    id: "msgFindQuery",
    conditions: (e) =>
      e.msgFindQuery && e.msgFindByIds ? e.msgFindQuery : null,
  },
];
let O = {};
async function Mo() {
  if (Ze && _t)
    try {
      return (
        (O = Po.reduce(
          (t, n) => {
            const r = $o(n.conditions);
            if (!r) return t;
            const o = ko(r),
              i = n.properties ? n.properties(o) : n.conditions(o);
            return (
              i &&
                (n.id === "Store"
                  ? (t.wapi = { ...t.wapi, ...i })
                  : (t.wapi[n.id] = i)),
              t
            );
          },
          { wapi: {} }
        ).wapi),
        O
      );
    } catch (e) {
      console.log(e);
    }
}
function ee() {
  return O.Chat.getModelsArray().find((t) => t.active);
}
function Ao({ funnel: e, setFunnelPopUp: t }) {
  var h, y, S;
  const [n, r] = a.exports.useState(!1),
    [o, i] = a.exports.useState(0),
    [l, s] = a.exports.useState(0),
    [u, d] = a.exports.useState(0),
    [p, m] = a.exports.useState(""),
    [g, b] = a.exports.useState(),
    [x, f] = a.exports.useState();
  return (
    a.exports.useEffect(() => {
      var v;
      try {
        r(!0);
        const C = ee();
        if (!e || !C) {
          e
            ? C ||
              L.error(
                "Nenhum chat aberto para enviar o funil, clique na conversa desejada antes de enviar"
              )
            : L.error(
                "Funil carregado incorretamente, recarregue a p\xE1gina e tente novamente"
              ),
            f(void 0),
            t(void 0),
            r(!1);
          return;
        }
        f(C);
        const E =
          (v = e == null ? void 0 : e.data) == null
            ? void 0
            : v.reduce((A, T) => A + T.delay, 0);
        i(E != null ? E : 0);
      } catch (C) {
        console.log(C), L.error(C.toString()), f(void 0), t(void 0), r(!1);
      }
    }, [e]),
    a.exports.useEffect(() => {
      s(Math.floor(o / 1e3 / 60)), d(Math.floor((o / 1e3) % 60));
      const v = new Date();
      v.setMilliseconds(v.getUTCMilliseconds() + o), m(v.toLocaleString());
    }, [o]),
    a.exports.useEffect(() => {
      const v =
        x &&
        O.ProfilePicThumb.getModelsArray().find(
          (C) => C.id._serialized === x.id._serialized
        );
      b((v == null ? void 0 : v.img) || void 0);
    }, [e, x]),
    c.createElement(
      Co,
      { isVisible: n },
      e && x
        ? c.createElement(
            "div",
            { id: "funnelPreviewContainer" },
            c.createElement("h1", null, "Confirma o envio do funil abaixo?"),
            g
              ? c.createElement("img", {
                  src: g,
                  alt: x.formattedTitle,
                  className: "profilePic",
                })
              : c.createElement(In, {
                  className: "profilePic profilePicDefault",
                }),
            c.createElement(
              "div",
              { id: "funnelDetails" },
              c.createElement(
                "div",
                { className: " detailContainer recipient" },
                c.createElement(wo, { className: "detailsIcon" }),
                c.createElement(
                  "span",
                  null,
                  "Destinat\xE1rio:",
                  " ",
                  c.createElement(
                    "strong",
                    null,
                    x.formattedTitle,
                    ((h = x.contact) == null
                      ? void 0
                      : h.isAddressBookContact) === 0 &&
                      ((y = x.contact) == null ? void 0 : y.notifyName) &&
                      ` ( ${(S = x.contact) == null ? void 0 : S.notifyName} )`
                  )
                )
              ),
              c.createElement(
                "div",
                { className: " detailContainer funnelName" },
                c.createElement(Ae, { className: "detailsIcon" }),
                c.createElement(
                  "span",
                  null,
                  "Funil: ",
                  c.createElement("strong", null, e.name)
                )
              ),
              c.createElement(
                "div",
                { className: " detailContainer duration" },
                c.createElement(xt, { className: "detailsIcon" }),
                c.createElement(
                  "span",
                  null,
                  "Dura\xE7\xE3o:",
                  " ",
                  c.createElement(
                    "strong",
                    null,
                    l > 0 && `${l} min e `,
                    " ",
                    u,
                    " ",
                    "seg"
                  )
                )
              ),
              c.createElement(
                "div",
                { className: " detailContainer deadline" },
                c.createElement(Qr, { className: "detailsIcon" }),
                c.createElement(
                  "span",
                  null,
                  "T\xE9rmino: ",
                  c.createElement("strong", null, p)
                )
              )
            ),
            c.createElement(
              "div",
              { id: "warningsContainer" },
              c.createElement(
                "table",
                null,
                c.createElement(
                  "thead",
                  null,
                  c.createElement(
                    "tr",
                    null,
                    c.createElement(
                      "th",
                      { className: "can" },
                      c.createElement(
                        "div",
                        { className: "thContainer" },
                        c.createElement(
                          "div",
                          { className: "thIconsContainer" },
                          c.createElement(yo, { className: "thIcons" })
                        ),
                        "Voc\xEA pode"
                      )
                    ),
                    c.createElement(
                      "th",
                      { className: "cant" },
                      c.createElement(
                        "div",
                        { className: "thContainer" },
                        c.createElement(
                          "div",
                          { className: "thIconsContainer" },
                          c.createElement(Eo, { className: "thIcons" })
                        ),
                        "N\xE3o pode"
                      )
                    ),
                    c.createElement(
                      "th",
                      { className: "shouldnt" },
                      c.createElement(
                        "div",
                        { className: "thContainer" },
                        c.createElement(
                          "div",
                          { className: "thIconsContainer" },
                          c.createElement(Jr, {
                            fill: "#EBC826",
                            className: "thIcons",
                          })
                        ),
                        "N\xE3o recomendado"
                      )
                    )
                  )
                ),
                c.createElement(
                  "tbody",
                  null,
                  c.createElement(
                    "tr",
                    null,
                    c.createElement(
                      "td",
                      { className: "can" },
                      "Continuar a utilizar o whatsapp normalmente."
                    ),
                    c.createElement(
                      "td",
                      { className: "cant" },
                      "Recarregar a p\xE1gina do whatsapp web ",
                      c.createElement("br", null),
                      "(isso cancelar\xE1 todos os funis atuais)"
                    ),
                    c.createElement(
                      "td",
                      { className: "shouldnt" },
                      "Disparar muitos funis ao mesmo tempo ",
                      c.createElement("br", null),
                      "(m\xE9dia simultanea recomendada: 10)"
                    )
                  ),
                  c.createElement(
                    "tr",
                    null,
                    c.createElement(
                      "td",
                      { className: "can" },
                      "Enviar mensagens e funis para outros chats ao mesmo tempo."
                    ),
                    c.createElement(
                      "td",
                      { className: "cant" },
                      "Fechar o whatsapp web ",
                      c.createElement("br", null),
                      "(isso cancelar\xE1 todos os funis atuais)"
                    ),
                    c.createElement(
                      "td",
                      { className: "shouldnt" },
                      "Enviar funis para usu\xE1rios que n\xE3o aceitaram receber mensagens (Spam)"
                    )
                  ),
                  c.createElement(
                    "tr",
                    null,
                    c.createElement(
                      "td",
                      { className: "can" },
                      "Vender muito e continuar encantando seus clientes com seu atendimento."
                    ),
                    c.createElement("td", { className: "cant" }),
                    c.createElement(
                      "td",
                      { className: "shouldnt" },
                      "Sair da aba do web whatsapp durante os disparos"
                    )
                  )
                )
              )
            ),
            c.createElement(
              "div",
              { id: "actionContainer" },
              c.createElement(
                "button",
                {
                  type: "button",
                  id: "cancelBtn",
                  onClick: () => {
                    r(!1), t(void 0);
                  },
                },
                "Cancelar"
              ),
              c.createElement(
                "button",
                {
                  type: "button",
                  id: "sendBtn",
                  onClick: () => {
                    rt.add(e, x.id.toString()), r(!1), t(void 0);
                  },
                },
                "Enviar"
              )
            )
          )
        : c.createElement("h1", null, "Carregando...")
    )
  );
}
function To(e) {
  if (!e) return;
  let t = e;
  if (O.WidFactory.isWidlike(t)) return O.WidFactory.createWidFromWidLike(t);
  if (
    (t &&
      typeof t == "object" &&
      typeof t._serialized == "object" &&
      (t = t._serialized),
    typeof t == "string")
  ) {
    if (/^\d+$/.test(t)) return O.WidFactory.createUserWid(t, "c.us");
    if (/^\d+-\d+$/.test(t)) return O.WidFactory.createUserWid(t, "g.us");
    if (/status$/.test(t)) return O.WidFactory.createUserWid(t, "broadcast");
  }
}
function jn(e) {
  const t = To(e);
  if (!!t) return t;
}
async function Fo(e) {
  const t = jn(e);
  return await O.findChat(t);
}
function Xt(e) {
  if (!e) return !1;
  e = typeof e == "string" ? e : e._serialized;
  const t = O.Chat.get(e);
  return (
    t &&
      (t.sendMessage = t.sendMessage
        ? t.sendMessage
        : function () {
            return O.sendTextMsgToChat(this, ...arguments);
          }),
    t
  );
}
async function Ye(e) {
  if (!e) return;
  let t = e,
    n = await Xt(t);
  if (!n && !t.includes("@g")) {
    const r = await O.sendQueryExists(jn(t));
    if (!r) return;
    await Fo(r.wid), (t = r.wid._serialized), (n = await Xt(t));
  }
  return n;
}
async function No(e) {
  try {
    const t = await e.arrayBuffer(),
      r = await new AudioContext().decodeAudioData(t),
      o = r.getChannelData(0),
      i = 64,
      l = Math.floor(o.length / i),
      s = [];
    for (let m = 0; m < i; m++) {
      const g = l * m;
      let b = 0;
      for (let x = 0; x < l; x++) b = b + Math.abs(o[g + x]);
      s.push(b / l);
    }
    const u = Math.pow(Math.max(...s), -1),
      d = s.map((m) => m * u),
      p = new Uint8Array(d.map((m) => Math.floor(100 * m)));
    return { duration: Math.floor(r.duration), waveform: p };
  } catch (t) {
    console.log("Failed to generate waveform", t);
  }
}
async function Wt(e, t, n) {
  n = { type: "auto-detect", waveform: !0, ...n };
  const r = await eo(t, n.filename, n.mimetype);
  r.name;
  const o = await O.OpaqueData.createFromData(r, r.type),
    i = {};
  let l;
  n.type === "audio"
    ? (await On(String(t)),
      (i.isPtt = n.isPtt),
      (i.precomputedFields = await No(r)))
    : n.type === "image"
    ? (l = n.isViewOnce)
    : n.type === "video"
    ? (i.asGif = n.isGif)
    : n.type === "document"
    ? (i.asDocument = !0)
    : n.type === "sticker" && (i.asSticker = !0);
  const s = O.MediaPrep.prepRawMedia(o, i);
  return (
    await s.waitForPrep(),
    s.sendToChat(e, {
      quotedMsg: n.quotedMsg,
      caption: n.caption,
      footer: n.footer,
      isViewOnce: l,
    })
  );
}
async function Io(e, t, n = !1) {
  const r = await Wt(t, e, {
    type: "audio",
    isPtt: !0,
    waveform: !0,
    quotedMsg: t.composeQuotedMsg,
    ...(!!t.isGroup &&
      !!n && {
        mentionedList: t.groupMetadata.participants
          .getModelsArray()
          .map((o) => o.id),
      }),
  });
  return (t.composeQuotedMsg = null), r;
}
async function Oo(e, t, n, r = !1) {
  const o = await Wt(t, e, {
    type: "document",
    filename: n,
    quotedMsg: t.composeQuotedMsg,
    ...(!!t.isGroup &&
      !!r && {
        mentionedList: t.groupMetadata.participants
          .getModelsArray()
          .map((i) => i.id),
      }),
  });
  return (t.composeQuotedMsg = null), o;
}
async function Yt(e, t, n, r = !1) {
  const o = await Wt(t, e, {
    type: "auto-detect",
    caption: n,
    quotedMsg: t.composeQuotedMsg,
    ...(!!t.isGroup &&
      !!r && {
        mentionedList: t.groupMetadata.participants
          .getModelsArray()
          .map((i) => i.id),
      }),
  });
  return (t.composeQuotedMsg = null), o;
}
async function Ro(e, t, n = !1) {
  let r;
  try {
    await new Promise(async (i) => {
      var s;
      setTimeout(() => {
        i(!1);
      }, 1e3);
      const l = await ((s = O.LinkPreview) == null
        ? void 0
        : s.findFirstWebLink(e));
      (r = l && (await O.fetchLinkPreview(l))), i(!0);
    });
  } catch (i) {
    console.log(i);
  }
  const o = await O.sendTextMsgToChat(t, e, {
    quotedMsg: t.composeQuotedMsg,
    linkPreview: r == null ? void 0 : r.data,
    ...(!!t.isGroup &&
      !!n && {
        mentionedJidList: t.groupMetadata.participants
          .getModelsArray()
          .map((i) => i.id),
      }),
  });
  return (t.composeQuotedMsg = null), o;
}
const H = window.localStorage.getItem("ZVExtensionId") || "",
  Do =
    0 >= H.indexOf("febglfjdlgcbli") &&
    0 >= H.indexOf("milglmkiipgoia") &&
    0 >= H.indexOf("fsoiwefnosklsd") &&
    0 >= H.indexOf("2hudj89jfjiodsf") &&
    0 >= H.indexOf("dfsh2ojisddljls");
async function Lo() {
  return new Promise((e) => {
    Do && chrome.runtime.sendMessage(H, { type: "saveValidOnStorage" }),
      chrome.runtime.sendMessage(
        H,
        { type: "checkPremium" },
        ({ type: t, response: n }) => {
          t === "checkPremium" && e(n);
        }
      );
  });
}
const Gn = a.exports.createContext({});
function zo({ children: e }) {
  const [t, n] = a.exports.useState(!1),
    [r, o] = a.exports.useState(""),
    [i, l] = a.exports.useState(!1),
    s = a.exports.useCallback(() => !!t, [t, r]);
  function u() {
    t ||
      Lo().then(({ premium: p, data: m, number_warning: g }) => {
        l(g === !0), o(m), n(!!p);
      });
  }
  a.exports.useEffect(() => {
    !r && !t && u();
  });
  const d = {
    isPremium: t,
    keyData: r,
    number_warning: i,
    refreshPremium: u,
    getPremium: s,
  };
  return c.createElement(Gn.Provider, { value: d }, e);
}
function Vt() {
  return a.exports.useContext(Gn);
}
async function Bo() {
  return new Promise((e, t) => {
    chrome.runtime.sendMessage(
      H,
      { type: "getIndexesFromStorage" },
      async ({ type: n, response: r }) => n === "getIndexesFromStorage" && e(r)
    );
  });
}
async function _o({ message: e }) {
  return new Promise((t, n) => {
    chrome.runtime.sendMessage(
      H,
      { type: "checkTriggersShouldFireByMessage", data: { message: e } },
      async ({ type: r, response: o }) =>
        r === "checkTriggersShouldFireByMessage" && t(o)
    );
  });
}
const xe = {
    shouldHideShortcuts: "GCZVshouldHideShortcuts",
    shouldAskToSendShortcuts: "GCZVshouldAskToSendShortcuts",
    shouldHideCurrentFunnelPopover: "GCZVshouldHideCurrentFunnelPopover",
    shouldMentionAllUsersOnGroup: "GCZVshouldMentionAllUsersOnGroup",
  },
  Zn = a.exports.createContext({});
function Ie(e, t) {
  e
    ? window.localStorage.removeItem(xe[t])
    : window.localStorage.setItem(xe[t], "true");
}
function Wo({ children: e }) {
  const [t, n] = a.exports.useState(
      !!window.localStorage.getItem(xe.shouldHideShortcuts)
    ),
    [r, o] = a.exports.useState(
      !!window.localStorage.getItem(xe.shouldHideCurrentFunnelPopover)
    ),
    [i, l] = a.exports.useState(
      !!window.localStorage.getItem(xe.shouldAskToSendShortcuts)
    ),
    [s, u] = a.exports.useState(
      !!window.localStorage.getItem(xe.shouldMentionAllUsersOnGroup)
    );
  function d() {
    o((x) => (Ie(x, "shouldHideCurrentFunnelPopover"), !x));
  }
  function p() {
    n((x) => {
      var h, y;
      Ie(x, "shouldHideShortcuts");
      const f = document.querySelector("#main");
      return (
        x
          ? (h = f == null ? void 0 : f.parentElement) == null ||
            h.classList.add("zvWithShortcuts")
          : (y = f == null ? void 0 : f.parentElement) == null ||
            y.classList.remove("zvWithShortcuts"),
        !x
      );
    });
  }
  function m() {
    l((x) => (Ie(x, "shouldAskToSendShortcuts"), !x));
  }
  function g() {
    u((x) => (Ie(x, "shouldMentionAllUsersOnGroup"), !x));
  }
  const b = {
    shouldHideShortcuts: t,
    toggleShouldHideShortcuts: p,
    shouldAskToSendShortcuts: i,
    toggleShouldAskToSendShortcuts: m,
    shouldHideCurrentFunnelPopover: r,
    toggleShouldHideCurrentFunnelPopover: d,
    shouldMentionAllUsersOnGroup: s,
    toggleShouldMentionAllUsersOnGroup: g,
  };
  return c.createElement(Zn.Provider, { value: b }, e);
}
function Ut() {
  return a.exports.useContext(Zn);
}
var Vo = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  me = new WeakMap(),
  Oe = new WeakMap(),
  Re = {},
  st = 0,
  qn = function (e) {
    return e && (e.host || qn(e.parentNode));
  },
  Uo = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = qn(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return Boolean(n);
      });
  },
  jo = function (e, t, n, r) {
    var o = Uo(t, Array.isArray(e) ? e : [e]);
    Re[n] || (Re[n] = new WeakMap());
    var i = Re[n],
      l = [],
      s = new Set(),
      u = new Set(o),
      d = function (m) {
        !m || s.has(m) || (s.add(m), d(m.parentNode));
      };
    o.forEach(d);
    var p = function (m) {
      !m ||
        u.has(m) ||
        Array.prototype.forEach.call(m.children, function (g) {
          if (s.has(g)) p(g);
          else {
            var b = g.getAttribute(r),
              x = b !== null && b !== "false",
              f = (me.get(g) || 0) + 1,
              h = (i.get(g) || 0) + 1;
            me.set(g, f),
              i.set(g, h),
              l.push(g),
              f === 1 && x && Oe.set(g, !0),
              h === 1 && g.setAttribute(n, "true"),
              x || g.setAttribute(r, "true");
          }
        });
    };
    return (
      p(t),
      s.clear(),
      st++,
      function () {
        l.forEach(function (m) {
          var g = me.get(m) - 1,
            b = i.get(m) - 1;
          me.set(m, g),
            i.set(m, b),
            g || (Oe.has(m) || m.removeAttribute(r), Oe.delete(m)),
            b || m.removeAttribute(n);
        }),
          st--,
          st ||
            ((me = new WeakMap()),
            (me = new WeakMap()),
            (Oe = new WeakMap()),
            (Re = {}));
      }
    );
  },
  Hn = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = t || Vo(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        jo(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  $e = "right-scroll-bar-position",
  ke = "width-before-scroll-bar",
  Go = "with-scroll-bars-hidden",
  Zo = "--removed-body-scroll-bar-size";
function qo(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Ho(e, t) {
  var n = a.exports.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
function Kn(e, t) {
  return Ho(t || null, function (n) {
    return e.forEach(function (r) {
      return qo(r, n);
    });
  });
}
function Ko(e) {
  return e;
}
function Xo(e, t) {
  t === void 0 && (t = Ko);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var l = t(i, r);
        return (
          n.push(l),
          function () {
            n = n.filter(function (s) {
              return s !== l;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var l = n;
          (n = []), l.forEach(i);
        }
        n = {
          push: function (s) {
            return i(s);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var l = [];
        if (n.length) {
          var s = n;
          (n = []), s.forEach(i), (l = n);
        }
        var u = function () {
            var p = l;
            (l = []), p.forEach(i);
          },
          d = function () {
            return Promise.resolve().then(u);
          };
        d(),
          (n = {
            push: function (p) {
              l.push(p), d();
            },
            filter: function (p) {
              return (l = l.filter(p)), n;
            },
          });
      },
    };
  return o;
}
function Xn(e) {
  e === void 0 && (e = {});
  var t = Xo(null);
  return (t.options = G({ async: !0, ssr: !1 }, e)), t;
}
var Yn = function (e) {
  var t = e.sideCar,
    n = zt(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return a.exports.createElement(r, G({}, n));
};
Yn.isSideCarExport = !0;
function Qn(e, t) {
  return e.useMedium(t), Yn;
}
var Jn = Xn(),
  it = function () {},
  Qe = a.exports.forwardRef(function (e, t) {
    var n = a.exports.useRef(null),
      r = a.exports.useState({
        onScrollCapture: it,
        onWheelCapture: it,
        onTouchMoveCapture: it,
      }),
      o = r[0],
      i = r[1],
      l = e.forwardProps,
      s = e.children,
      u = e.className,
      d = e.removeScrollBar,
      p = e.enabled,
      m = e.shards,
      g = e.sideCar,
      b = e.noIsolation,
      x = e.inert,
      f = e.allowPinchZoom,
      h = e.as,
      y = h === void 0 ? "div" : h,
      S = e.gapMode,
      v = zt(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      C = g,
      E = Kn([n, t]),
      A = G(G({}, v), o);
    return a.exports.createElement(
      a.exports.Fragment,
      null,
      p &&
        a.exports.createElement(C, {
          sideCar: Jn,
          removeScrollBar: d,
          shards: m,
          noIsolation: b,
          inert: x,
          setCallbacks: i,
          allowPinchZoom: !!f,
          lockRef: n,
          gapMode: S,
        }),
      l
        ? a.exports.cloneElement(
            a.exports.Children.only(s),
            G(G({}, A), { ref: E })
          )
        : a.exports.createElement(y, G({}, A, { className: u, ref: E }), s)
    );
  });
Qe.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Qe.classNames = { fullWidth: ke, zeroRight: $e };
var Yo = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function Qo() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Yo();
  return t && e.setAttribute("nonce", t), e;
}
function Jo(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function ea(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ta = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = Qo()) && (Jo(t, n), ea(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  na = function () {
    var e = ta();
    return function (t, n) {
      a.exports.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  jt = function () {
    var e = na(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  ra = { left: 0, top: 0, right: 0, gap: 0 },
  lt = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  oa = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [lt(n), lt(r), lt(o)];
  },
  aa = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return ra;
    var t = oa(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  sa = jt(),
  ia = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      l = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          Go,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  body {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  l,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(s, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(s, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          $e,
          ` {
    right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          ke,
          ` {
    margin-right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat($e, " .")
        .concat(
          $e,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(ke, " .")
        .concat(
          ke,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body {
    `
        )
        .concat(Zo, ": ")
        .concat(
          s,
          `px;
  }
`
        )
    );
  },
  er = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r,
      i = a.exports.useMemo(
        function () {
          return aa(o);
        },
        [o]
      );
    return a.exports.createElement(sa, {
      styles: ia(i, !t, o, n ? "" : "!important"),
    });
  },
  wt = !1;
if (typeof window < "u")
  try {
    var De = Object.defineProperty({}, "passive", {
      get: function () {
        return (wt = !0), !0;
      },
    });
    window.addEventListener("test", De, De),
      window.removeEventListener("test", De, De);
  } catch {
    wt = !1;
  }
var ge = wt ? { passive: !1 } : !1,
  la = function (e) {
    return e.tagName === "TEXTAREA";
  },
  tr = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !la(e) && n[t] === "visible")
    );
  },
  ca = function (e) {
    return tr(e, "overflowY");
  },
  da = function (e) {
    return tr(e, "overflowX");
  },
  Qt = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = nr(e, r);
      if (o) {
        var i = rr(e, r),
          l = i[1],
          s = i[2];
        if (l > s) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  ua = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  fa = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  nr = function (e, t) {
    return e === "v" ? ca(t) : da(t);
  },
  rr = function (e, t) {
    return e === "v" ? ua(t) : fa(t);
  },
  pa = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  ma = function (e, t, n, r, o) {
    var i = pa(e, window.getComputedStyle(t).direction),
      l = i * r,
      s = n.target,
      u = t.contains(s),
      d = !1,
      p = l > 0,
      m = 0,
      g = 0;
    do {
      var b = rr(e, s),
        x = b[0],
        f = b[1],
        h = b[2],
        y = f - h - i * x;
      (x || y) && nr(e, s) && ((m += y), (g += x)), (s = s.parentNode);
    } while ((!u && s !== document.body) || (u && (t.contains(s) || t === s)));
    return (
      ((p && ((o && m === 0) || (!o && l > m))) ||
        (!p && ((o && g === 0) || (!o && -l > g)))) &&
        (d = !0),
      d
    );
  },
  Le = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Jt = function (e) {
    return [e.deltaX, e.deltaY];
  },
  en = function (e) {
    return e && "current" in e ? e.current : e;
  },
  ga = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  va = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  ha = 0,
  ve = [];
function ba(e) {
  var t = a.exports.useRef([]),
    n = a.exports.useRef([0, 0]),
    r = a.exports.useRef(),
    o = a.exports.useState(ha++)[0],
    i = a.exports.useState(jt)[0],
    l = a.exports.useRef(e);
  a.exports.useEffect(
    function () {
      l.current = e;
    },
    [e]
  ),
    a.exports.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var f = Bn([e.lockRef.current], (e.shards || []).map(en), !0).filter(
            Boolean
          );
          return (
            f.forEach(function (h) {
              return h.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                f.forEach(function (h) {
                  return h.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var s = a.exports.useCallback(function (f, h) {
      if ("touches" in f && f.touches.length === 2)
        return !l.current.allowPinchZoom;
      var y = Le(f),
        S = n.current,
        v = "deltaX" in f ? f.deltaX : S[0] - y[0],
        C = "deltaY" in f ? f.deltaY : S[1] - y[1],
        E,
        A = f.target,
        T = Math.abs(v) > Math.abs(C) ? "h" : "v";
      if ("touches" in f && T === "h" && A.type === "range") return !1;
      var M = Qt(T, A);
      if (!M) return !0;
      if ((M ? (E = T) : ((E = T === "v" ? "h" : "v"), (M = Qt(T, A))), !M))
        return !1;
      if (
        (!r.current && "changedTouches" in f && (v || C) && (r.current = E), !E)
      )
        return !0;
      var w = r.current || E;
      return ma(w, h, f, w === "h" ? v : C, !0);
    }, []),
    u = a.exports.useCallback(function (f) {
      var h = f;
      if (!(!ve.length || ve[ve.length - 1] !== i)) {
        var y = "deltaY" in h ? Jt(h) : Le(h),
          S = t.current.filter(function (E) {
            return E.name === h.type && E.target === h.target && ga(E.delta, y);
          })[0];
        if (S && S.should) {
          h.cancelable && h.preventDefault();
          return;
        }
        if (!S) {
          var v = (l.current.shards || [])
              .map(en)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(h.target);
              }),
            C = v.length > 0 ? s(h, v[0]) : !l.current.noIsolation;
          C && h.cancelable && h.preventDefault();
        }
      }
    }, []),
    d = a.exports.useCallback(function (f, h, y, S) {
      var v = { name: f, delta: h, target: y, should: S };
      t.current.push(v),
        setTimeout(function () {
          t.current = t.current.filter(function (C) {
            return C !== v;
          });
        }, 1);
    }, []),
    p = a.exports.useCallback(function (f) {
      (n.current = Le(f)), (r.current = void 0);
    }, []),
    m = a.exports.useCallback(function (f) {
      d(f.type, Jt(f), f.target, s(f, e.lockRef.current));
    }, []),
    g = a.exports.useCallback(function (f) {
      d(f.type, Le(f), f.target, s(f, e.lockRef.current));
    }, []);
  a.exports.useEffect(function () {
    return (
      ve.push(i),
      e.setCallbacks({
        onScrollCapture: m,
        onWheelCapture: m,
        onTouchMoveCapture: g,
      }),
      document.addEventListener("wheel", u, ge),
      document.addEventListener("touchmove", u, ge),
      document.addEventListener("touchstart", p, ge),
      function () {
        (ve = ve.filter(function (f) {
          return f !== i;
        })),
          document.removeEventListener("wheel", u, ge),
          document.removeEventListener("touchmove", u, ge),
          document.removeEventListener("touchstart", p, ge);
      }
    );
  }, []);
  var b = e.removeScrollBar,
    x = e.inert;
  return a.exports.createElement(
    a.exports.Fragment,
    null,
    x ? a.exports.createElement(i, { styles: va(o) }) : null,
    b ? a.exports.createElement(er, { gapMode: e.gapMode }) : null
  );
}
const xa = Qn(Jn, ba);
var or = a.exports.forwardRef(function (e, t) {
  return a.exports.createElement(Qe, G({}, e, { ref: t, sideCar: xa }));
});
or.classNames = Qe.classNames;
const ya = or,
  ar = (e) => {
    const { present: t, children: n } = e,
      r = (function (l) {
        const [s, u] = a.exports.useState(),
          d = a.exports.useRef({}),
          p = a.exports.useRef(l),
          m = a.exports.useRef("none"),
          g = l ? "mounted" : "unmounted",
          [b, x] = (function (f, h) {
            return a.exports.useReducer((y, S) => {
              const v = h[y][S];
              return v != null ? v : y;
            }, f);
          })(g, {
            mounted: {
              UNMOUNT: "unmounted",
              ANIMATION_OUT: "unmountSuspended",
            },
            unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
            unmounted: { MOUNT: "mounted" },
          });
        return (
          a.exports.useEffect(() => {
            const f = ze(d.current);
            m.current = b === "mounted" ? f : "none";
          }, [b]),
          Ge(() => {
            const f = d.current,
              h = p.current;
            if (h !== l) {
              const y = m.current,
                S = ze(f);
              l
                ? x("MOUNT")
                : S === "none" || (f == null ? void 0 : f.display) === "none"
                ? x("UNMOUNT")
                : x(h && y !== S ? "ANIMATION_OUT" : "UNMOUNT"),
                (p.current = l);
            }
          }, [l, x]),
          Ge(() => {
            if (s) {
              const f = (y) => {
                  const S = ze(d.current).includes(y.animationName);
                  y.target === s && S && x("ANIMATION_END");
                },
                h = (y) => {
                  y.target === s && (m.current = ze(d.current));
                };
              return (
                s.addEventListener("animationstart", h),
                s.addEventListener("animationcancel", f),
                s.addEventListener("animationend", f),
                () => {
                  s.removeEventListener("animationstart", h),
                    s.removeEventListener("animationcancel", f),
                    s.removeEventListener("animationend", f);
                }
              );
            }
            x("ANIMATION_END");
          }, [s, x]),
          {
            isPresent: ["mounted", "unmountSuspended"].includes(b),
            ref: a.exports.useCallback((f) => {
              f && (d.current = getComputedStyle(f)), u(f);
            }, []),
          }
        );
      })(t),
      o =
        typeof n == "function"
          ? n({ present: r.isPresent })
          : a.exports.Children.only(n),
      i = ue(r.ref, o.ref);
    return typeof n == "function" || r.isPresent
      ? a.exports.cloneElement(o, { ref: i })
      : null;
  };
function ze(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
ar.displayName = "Presence";
let ct = 0;
function Ea() {
  a.exports.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement(
        "afterbegin",
        (e = n[0]) !== null && e !== void 0 ? e : tn()
      ),
      document.body.insertAdjacentElement(
        "beforeend",
        (t = n[1]) !== null && t !== void 0 ? t : tn()
      ),
      ct++,
      () => {
        ct === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((r) => r.remove()),
          ct--;
      }
    );
  }, []);
}
function tn() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
const sr = a.exports.forwardRef((e, t) => {
    var n, r;
    const { containerRef: o, style: i, ...l } = e,
      s =
        (n = o == null ? void 0 : o.current) !== null && n !== void 0
          ? n
          : globalThis == null ||
            (r = globalThis.document) === null ||
            r === void 0
          ? void 0
          : r.body,
      [, u] = a.exports.useState({});
    return (
      Ge(() => {
        u({});
      }, []),
      s
        ? Rn.createPortal(
            a.exports.createElement(
              re.div,
              D({ "data-radix-portal": "" }, l, {
                ref: t,
                style:
                  s === document.body
                    ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 2147483647,
                        ...i,
                      }
                    : void 0,
              })
            ),
            s
          )
        : null
    );
  }),
  nn = { bubbles: !1, cancelable: !0 },
  wa = a.exports.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...l
      } = e,
      [s, u] = a.exports.useState(null),
      d = Pe(o),
      p = Pe(i),
      m = a.exports.useRef(null),
      g = ue(t, (f) => u(f)),
      b = a.exports.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    a.exports.useEffect(() => {
      if (r) {
        let f = function (y) {
            if (b.paused || !s) return;
            const S = y.target;
            s.contains(S) ? (m.current = S) : se(m.current, { select: !0 });
          },
          h = function (y) {
            !b.paused &&
              s &&
              (s.contains(y.relatedTarget) || se(m.current, { select: !0 }));
          };
        return (
          document.addEventListener("focusin", f),
          document.addEventListener("focusout", h),
          () => {
            document.removeEventListener("focusin", f),
              document.removeEventListener("focusout", h);
          }
        );
      }
    }, [r, s, b.paused]),
      a.exports.useEffect(() => {
        if (s) {
          an.add(b);
          const h = document.activeElement;
          if (!s.contains(h)) {
            const y = new Event("focusScope.autoFocusOnMount", nn);
            s.addEventListener("focusScope.autoFocusOnMount", d),
              s.dispatchEvent(y),
              y.defaultPrevented ||
                ((function (S, { select: v = !1 } = {}) {
                  const C = document.activeElement;
                  for (const E of S)
                    if ((se(E, { select: v }), document.activeElement !== C))
                      return;
                })(((f = rn(s)), f.filter((S) => S.tagName !== "A")), {
                  select: !0,
                }),
                document.activeElement === h && se(s));
          }
          return () => {
            s.removeEventListener("focusScope.autoFocusOnMount", d),
              setTimeout(() => {
                const y = new Event("focusScope.autoFocusOnUnmount", nn);
                s.addEventListener("focusScope.autoFocusOnUnmount", p),
                  s.dispatchEvent(y),
                  y.defaultPrevented ||
                    se(h != null ? h : document.body, { select: !0 }),
                  s.removeEventListener("focusScope.autoFocusOnUnmount", p),
                  an.remove(b);
              }, 0);
          };
        }
        var f;
      }, [s, d, p, b]);
    const x = a.exports.useCallback(
      (f) => {
        if ((!n && !r) || b.paused) return;
        const h = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey,
          y = document.activeElement;
        if (h && y) {
          const S = f.currentTarget,
            [v, C] = (function (E) {
              const A = rn(E),
                T = on(A, E),
                M = on(A.reverse(), E);
              return [T, M];
            })(S);
          v && C
            ? f.shiftKey || y !== C
              ? f.shiftKey &&
                y === v &&
                (f.preventDefault(), n && se(C, { select: !0 }))
              : (f.preventDefault(), n && se(v, { select: !0 }))
            : y === S && f.preventDefault();
        }
      },
      [n, r, b.paused]
    );
    return a.exports.createElement(
      re.div,
      D({ tabIndex: -1 }, l, { ref: g, onKeyDown: x })
    );
  });
function rn(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function on(e, t) {
  for (const n of e) if (!Ca(n, { upTo: t })) return n;
}
function Ca(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function se(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }),
      e !== n &&
        (function (r) {
          return r instanceof HTMLInputElement && "select" in r;
        })(e) &&
        t &&
        e.select();
  }
}
const an = (function () {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = sn(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = sn(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
    },
  };
})();
function sn(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Sa(e) {
  const t = Pe(e);
  a.exports.useEffect(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return (
      document.addEventListener("keydown", n),
      () => document.removeEventListener("keydown", n)
    );
  }, [t]);
}
let ln,
  Be = 0;
function $a({ disabled: e }) {
  const t = a.exports.useRef(!1);
  Ge(() => {
    if (e) {
      let n = function () {
          Be--, Be === 0 && (document.body.style.pointerEvents = ln);
        },
        r = function (o) {
          t.current = o.pointerType !== "mouse";
        };
      return (
        Be === 0 && (ln = document.body.style.pointerEvents),
        (document.body.style.pointerEvents = "none"),
        Be++,
        document.addEventListener("pointerup", r),
        () => {
          t.current ? document.addEventListener("click", n, { once: !0 }) : n(),
            document.removeEventListener("pointerup", r);
        }
      );
    }
  }, [e]);
}
const ka = a.exports.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Pa = a.exports.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: l,
        onDismiss: s,
        ...u
      } = e,
      d = a.exports.useContext(ka),
      [p, m] = a.exports.useState(null),
      [, g] = a.exports.useState({}),
      b = ue(t, (A) => m(A)),
      x = Array.from(d.layers),
      [f] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1),
      h = x.indexOf(f),
      y = p ? x.indexOf(p) : -1,
      S = d.layersWithOutsidePointerEventsDisabled.size > 0,
      v = y >= h,
      C = (function (A) {
        const T = Pe(A),
          M = a.exports.useRef(!1);
        return (
          a.exports.useEffect(() => {
            const w = (F) => {
                F.target &&
                  !M.current &&
                  dn("dismissableLayer.pointerDownOutside", T, {
                    originalEvent: F,
                  }),
                  (M.current = !1);
              },
              $ = window.setTimeout(() => {
                document.addEventListener("pointerdown", w);
              }, 0);
            return () => {
              window.clearTimeout($),
                document.removeEventListener("pointerdown", w);
            };
          }, [T]),
          { onPointerDownCapture: () => (M.current = !0) }
        );
      })((A) => {
        const T = A.target,
          M = [...d.branches].some((w) => w.contains(T));
        v &&
          !M &&
          (o == null || o(A),
          l == null || l(A),
          A.defaultPrevented || s == null || s());
      }),
      E = (function (A) {
        const T = Pe(A),
          M = a.exports.useRef(!1);
        return (
          a.exports.useEffect(() => {
            const w = ($) => {
              $.target &&
                !M.current &&
                dn("dismissableLayer.focusOutside", T, { originalEvent: $ });
            };
            return (
              document.addEventListener("focusin", w),
              () => document.removeEventListener("focusin", w)
            );
          }, [T]),
          {
            onFocusCapture: () => (M.current = !0),
            onBlurCapture: () => (M.current = !1),
          }
        );
      })((A) => {
        const T = A.target;
        [...d.branches].some((M) => M.contains(T)) ||
          (i == null || i(A),
          l == null || l(A),
          A.defaultPrevented || s == null || s());
      });
    return (
      Sa((A) => {
        y === d.layers.size - 1 &&
          (r == null || r(A), A.defaultPrevented || s == null || s());
      }),
      $a({ disabled: n }),
      a.exports.useEffect(() => {
        p &&
          (n && d.layersWithOutsidePointerEventsDisabled.add(p),
          d.layers.add(p),
          cn());
      }, [p, n, d]),
      a.exports.useEffect(
        () => () => {
          p &&
            (d.layers.delete(p),
            d.layersWithOutsidePointerEventsDisabled.delete(p),
            cn());
        },
        [p, d]
      ),
      a.exports.useEffect(() => {
        const A = () => g({});
        return (
          document.addEventListener("dismissableLayer.update", A),
          () => document.removeEventListener("dismissableLayer.update", A)
        );
      }, []),
      a.exports.createElement(
        re.div,
        D({}, u, {
          ref: b,
          style: {
            pointerEvents: S ? (v ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: te(e.onFocusCapture, E.onFocusCapture),
          onBlurCapture: te(e.onBlurCapture, E.onBlurCapture),
          onPointerDownCapture: te(
            e.onPointerDownCapture,
            C.onPointerDownCapture
          ),
        })
      )
    );
  });
function cn() {
  const e = new Event("dismissableLayer.update");
  document.dispatchEvent(e);
}
function dn(e, t, n) {
  const r = n.originalEvent.target,
    o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  return t && r.addEventListener(e, t, { once: !0 }), !r.dispatchEvent(o);
}
const Ma = a.exports.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return a.exports.createElement(
      re.svg,
      D({}, i, {
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
      }),
      e.asChild
        ? n
        : a.exports.createElement("polygon", { points: "0,0 30,0 15,10" })
    );
  }),
  Aa = Ma;
function un(e) {
  const [t, n] = a.exports.useState(void 0);
  return (
    a.exports.useEffect(() => {
      if (e) {
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let l, s;
          if ("borderBoxSize" in i) {
            const u = i.borderBoxSize,
              d = Array.isArray(u) ? u[0] : u;
            (l = d.inlineSize), (s = d.blockSize);
          } else {
            const u = e.getBoundingClientRect();
            (l = u.width), (s = u.height);
          }
          n({ width: l, height: s });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      }
      n(void 0);
    }, [e]),
    t
  );
}
function Ta(e, t) {
  const n = ie.get(e);
  return (
    n === void 0
      ? (ie.set(e, { rect: {}, callbacks: [t] }),
        ie.size === 1 && (Ct = requestAnimationFrame(ir)))
      : (n.callbacks.push(t), t(e.getBoundingClientRect())),
    () => {
      const r = ie.get(e);
      if (r === void 0) return;
      const o = r.callbacks.indexOf(t);
      o > -1 && r.callbacks.splice(o, 1),
        r.callbacks.length === 0 &&
          (ie.delete(e), ie.size === 0 && cancelAnimationFrame(Ct));
    }
  );
}
let Ct;
const ie = new Map();
function ir() {
  const e = [];
  ie.forEach((t, n) => {
    const r = n.getBoundingClientRect();
    var o, i;
    (o = t.rect),
      (i = r),
      (o.width !== i.width ||
        o.height !== i.height ||
        o.top !== i.top ||
        o.right !== i.right ||
        o.bottom !== i.bottom ||
        o.left !== i.left) &&
        ((t.rect = r), e.push(t));
  }),
    e.forEach((t) => {
      t.callbacks.forEach((n) => n(t.rect));
    }),
    (Ct = requestAnimationFrame(ir));
}
function Fa(e) {
  const [t, n] = a.exports.useState();
  return (
    a.exports.useEffect(() => {
      if (e) {
        const r = Ta(e, n);
        return () => {
          n(void 0), r();
        };
      }
    }, [e]),
    t
  );
}
function Na({
  anchorRect: e,
  popperSize: t,
  arrowSize: n,
  arrowOffset: r = 0,
  side: o,
  sideOffset: i = 0,
  align: l,
  alignOffset: s = 0,
  shouldAvoidCollisions: u = !0,
  collisionBoundariesRect: d,
  collisionTolerance: p = 0,
}) {
  if (!e || !t || !d) return { popperStyles: Ia, arrowStyles: dt };
  const m = (function (T, M, w = 0, $ = 0, F) {
      const k = F ? F.height : 0,
        P = fn(M, T, "x"),
        R = fn(M, T, "y"),
        N = R.before - w - k,
        z = R.after + w + k,
        _ = P.before - w - k,
        W = P.after + w + k;
      return {
        top: {
          start: { x: P.start + $, y: N },
          center: { x: P.center, y: N },
          end: { x: P.end - $, y: N },
        },
        right: {
          start: { x: W, y: R.start + $ },
          center: { x: W, y: R.center },
          end: { x: W, y: R.end - $ },
        },
        bottom: {
          start: { x: P.start + $, y: z },
          center: { x: P.center, y: z },
          end: { x: P.end - $, y: z },
        },
        left: {
          start: { x: _, y: R.start + $ },
          center: { x: _, y: R.center },
          end: { x: _, y: R.end - $ },
        },
      };
    })(t, e, i, s, n),
    g = m[o][l];
  if (u === !1) {
    const T = pn(g);
    let M = dt;
    return (
      n &&
        (M = gn({
          popperSize: t,
          arrowSize: n,
          arrowOffset: r,
          side: o,
          align: l,
        })),
      {
        popperStyles: {
          ...T,
          "--radix-popper-transform-origin": mn(t, o, l, r, n),
        },
        arrowStyles: M,
        placedSide: o,
        placedAlign: l,
      }
    );
  }
  const b = DOMRect.fromRect({ ...t, ...g }),
    x =
      ((f = d),
      (h = p),
      DOMRect.fromRect({
        width: f.width - 2 * h,
        height: f.height - 2 * h,
        x: f.left + h,
        y: f.top + h,
      }));
  var f, h;
  const y = hn(b, x),
    S = m[vn(o)][l],
    v = (function (T, M, w) {
      const $ = vn(T);
      return M[T] && !w[$] ? $ : T;
    })(o, y, hn(DOMRect.fromRect({ ...t, ...S }), x)),
    C = (function (T, M, w, $, F) {
      const k = w === "top" || w === "bottom",
        P = k ? "left" : "top",
        R = k ? "right" : "bottom",
        N = k ? "width" : "height",
        z = M[N] > T[N];
      return ($ === "start" || $ === "center") && ((F[P] && z) || (F[R] && !z))
        ? "end"
        : ($ === "end" || $ === "center") && ((F[R] && z) || (F[P] && !z))
        ? "start"
        : $;
    })(t, e, o, l, y),
    E = pn(m[v][C]);
  let A = dt;
  return (
    n &&
      (A = gn({
        popperSize: t,
        arrowSize: n,
        arrowOffset: r,
        side: v,
        align: C,
      })),
    {
      popperStyles: {
        ...E,
        "--radix-popper-transform-origin": mn(t, v, C, r, n),
      },
      arrowStyles: A,
      placedSide: v,
      placedAlign: C,
    }
  );
}
function fn(e, t, n) {
  const r = e[n === "x" ? "left" : "top"],
    o = n === "x" ? "width" : "height",
    i = e[o],
    l = t[o];
  return {
    before: r - l,
    start: r,
    center: r + (i - l) / 2,
    end: r + i - l,
    after: r + i,
  };
}
function pn(e) {
  return {
    position: "absolute",
    top: 0,
    left: 0,
    minWidth: "max-content",
    willChange: "transform",
    transform: `translate3d(${Math.round(e.x + window.scrollX)}px, ${Math.round(
      e.y + window.scrollY
    )}px, 0)`,
  };
}
function mn(e, t, n, r, o) {
  const i = t === "top" || t === "bottom",
    l = o ? o.width : 0,
    s = o ? o.height : 0,
    u = l / 2 + r;
  let d = "",
    p = "";
  return (
    i
      ? ((d = { start: `${u}px`, center: "center", end: e.width - u + "px" }[
          n
        ]),
        (p = t === "top" ? `${e.height + s}px` : -s + "px"))
      : ((d = t === "left" ? `${e.width + s}px` : -s + "px"),
        (p = { start: `${u}px`, center: "center", end: e.height - u + "px" }[
          n
        ])),
    `${d} ${p}`
  );
}
const Ia = {
    position: "fixed",
    top: 0,
    left: 0,
    opacity: 0,
    transform: "translate3d(0, -200%, 0)",
  },
  dt = { position: "absolute", opacity: 0 };
function gn({
  popperSize: e,
  arrowSize: t,
  arrowOffset: n,
  side: r,
  align: o,
}) {
  const i = (e.width - t.width) / 2,
    l = (e.height - t.width) / 2,
    s = { top: 0, right: 90, bottom: 180, left: -90 }[r],
    u = Math.max(t.width, t.height),
    d = {
      width: `${u}px`,
      height: `${u}px`,
      transform: `rotate(${s}deg)`,
      willChange: "transform",
      position: "absolute",
      [r]: "100%",
      direction: Oa(r, o),
    };
  return (
    (r !== "top" && r !== "bottom") ||
      (o === "start" && (d.left = `${n}px`),
      o === "center" && (d.left = `${i}px`),
      o === "end" && (d.right = `${n}px`)),
    (r !== "left" && r !== "right") ||
      (o === "start" && (d.top = `${n}px`),
      o === "center" && (d.top = `${l}px`),
      o === "end" && (d.bottom = `${n}px`)),
    d
  );
}
function Oa(e, t) {
  return ((e !== "top" && e !== "right") || t !== "end") &&
    ((e !== "bottom" && e !== "left") || t === "end")
    ? "ltr"
    : "rtl";
}
function vn(e) {
  return { top: "bottom", right: "left", bottom: "top", left: "right" }[e];
}
function hn(e, t) {
  return {
    top: e.top < t.top,
    right: e.right > t.right,
    bottom: e.bottom > t.bottom,
    left: e.left < t.left,
  };
}
const [lr, cr] = _n("Popper"),
  [Ra, dr] = lr("Popper"),
  Da = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = a.exports.useState(null);
    return a.exports.createElement(
      Ra,
      { scope: t, anchor: r, onAnchorChange: o },
      n
    );
  },
  La = a.exports.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = dr("PopperAnchor", n),
      l = a.exports.useRef(null),
      s = ue(t, l);
    return (
      a.exports.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || l.current);
      }),
      r ? null : a.exports.createElement(re.div, D({}, o, { ref: s }))
    );
  }),
  [za, Ba] = lr("PopperContent"),
  _a = a.exports.forwardRef((e, t) => {
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o,
        align: i = "center",
        alignOffset: l,
        collisionTolerance: s,
        avoidCollisions: u = !0,
        ...d
      } = e,
      p = dr("PopperContent", n),
      [m, g] = a.exports.useState(),
      b = Fa(p.anchor),
      [x, f] = a.exports.useState(null),
      h = un(x),
      [y, S] = a.exports.useState(null),
      v = un(y),
      C = ue(t, (k) => f(k)),
      E = (function () {
        const [k, P] = a.exports.useState(void 0);
        return (
          a.exports.useEffect(() => {
            let R;
            function N() {
              P({ width: window.innerWidth, height: window.innerHeight });
            }
            function z() {
              window.clearTimeout(R), (R = window.setTimeout(N, 100));
            }
            return (
              N(),
              window.addEventListener("resize", z),
              () => window.removeEventListener("resize", z)
            );
          }, []),
          k
        );
      })(),
      A = E ? DOMRect.fromRect({ ...E, x: 0, y: 0 }) : void 0,
      {
        popperStyles: T,
        arrowStyles: M,
        placedSide: w,
        placedAlign: $,
      } = Na({
        anchorRect: b,
        popperSize: h,
        arrowSize: v,
        arrowOffset: m,
        side: r,
        sideOffset: o,
        align: i,
        alignOffset: l,
        shouldAvoidCollisions: u,
        collisionBoundariesRect: A,
        collisionTolerance: s,
      }),
      F = w !== void 0;
    return a.exports.createElement(
      "div",
      { style: T, "data-radix-popper-content-wrapper": "" },
      a.exports.createElement(
        za,
        { scope: n, arrowStyles: M, onArrowChange: S, onArrowOffsetChange: g },
        a.exports.createElement(
          re.div,
          D({ "data-side": w, "data-align": $ }, d, {
            style: { ...d.style, animation: F ? void 0 : "none" },
            ref: C,
          })
        )
      )
    );
  }),
  Wa = a.exports.forwardRef(function (e, t) {
    const { __scopePopper: n, offset: r, ...o } = e,
      i = Ba("PopperArrow", n),
      { onArrowOffsetChange: l } = i;
    return (
      a.exports.useEffect(() => l(r), [l, r]),
      a.exports.createElement(
        "span",
        { style: { ...i.arrowStyles, pointerEvents: "none" } },
        a.exports.createElement(
          "span",
          {
            ref: i.onArrowChange,
            style: {
              display: "inline-block",
              verticalAlign: "top",
              pointerEvents: "auto",
            },
          },
          a.exports.createElement(
            Aa,
            D({}, o, { ref: t, style: { ...o.style, display: "block" } })
          )
        )
      )
    );
  }),
  Va = Da,
  Ua = La,
  ja = _a,
  Ga = Wa,
  [Za, Jl] = _n("Popover", [cr]),
  Je = cr(),
  [qa, Ee] = Za("Popover"),
  Ha = (e) => {
    const {
        __scopePopover: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: l = !1,
      } = e,
      s = Je(t),
      u = a.exports.useRef(null),
      [d, p] = a.exports.useState(!1),
      [m = !1, g] = ho({ prop: r, defaultProp: o, onChange: i });
    return a.exports.createElement(
      Va,
      s,
      a.exports.createElement(
        qa,
        {
          scope: t,
          contentId: bo(),
          triggerRef: u,
          open: m,
          onOpenChange: g,
          onOpenToggle: a.exports.useCallback(() => g((b) => !b), [g]),
          hasCustomAnchor: d,
          onCustomAnchorAdd: a.exports.useCallback(() => p(!0), []),
          onCustomAnchorRemove: a.exports.useCallback(() => p(!1), []),
          modal: l,
        },
        n
      )
    );
  },
  Ka = a.exports.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = Ee("PopoverTrigger", n),
      i = Je(n),
      l = ue(t, o.triggerRef),
      s = a.exports.createElement(
        re.button,
        D(
          {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": fr(o.open),
          },
          r,
          { ref: l, onClick: te(e.onClick, o.onOpenToggle) }
        )
      );
    return o.hasCustomAnchor
      ? s
      : a.exports.createElement(Ua, D({ asChild: !0 }, i), s);
  }),
  Xa = a.exports.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = Ee("PopoverContent", e.__scopePopover);
    return a.exports.createElement(
      ar,
      { present: n || o.open },
      o.modal
        ? a.exports.createElement(Ya, D({}, r, { ref: t }))
        : a.exports.createElement(Qa, D({}, r, { ref: t }))
    );
  }),
  Ya = a.exports.forwardRef((e, t) => {
    const { allowPinchZoom: n, portalled: r = !0, ...o } = e,
      i = Ee("PopoverContent", e.__scopePopover),
      l = a.exports.useRef(null),
      s = ue(t, l),
      u = a.exports.useRef(!1);
    a.exports.useEffect(() => {
      const p = l.current;
      if (p) return Hn(p);
    }, []);
    const d = r ? sr : a.exports.Fragment;
    return a.exports.createElement(
      d,
      null,
      a.exports.createElement(
        ya,
        { allowPinchZoom: n },
        a.exports.createElement(
          ur,
          D({}, o, {
            ref: s,
            trapFocus: i.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: te(e.onCloseAutoFocus, (p) => {
              var m;
              p.preventDefault(),
                u.current ||
                  (m = i.triggerRef.current) === null ||
                  m === void 0 ||
                  m.focus();
            }),
            onPointerDownOutside: te(
              e.onPointerDownOutside,
              (p) => {
                const m = p.detail.originalEvent,
                  g = m.button === 0 && m.ctrlKey === !0,
                  b = m.button === 2 || g;
                u.current = b;
              },
              { checkForDefaultPrevented: !1 }
            ),
            onFocusOutside: te(e.onFocusOutside, (p) => p.preventDefault(), {
              checkForDefaultPrevented: !1,
            }),
          })
        )
      )
    );
  }),
  Qa = a.exports.forwardRef((e, t) => {
    const { portalled: n = !0, ...r } = e,
      o = Ee("PopoverContent", e.__scopePopover),
      i = a.exports.useRef(!1),
      l = n ? sr : a.exports.Fragment;
    return a.exports.createElement(
      l,
      null,
      a.exports.createElement(
        ur,
        D({}, r, {
          ref: t,
          trapFocus: !1,
          disableOutsidePointerEvents: !1,
          onCloseAutoFocus: (s) => {
            var u, d;
            (u = e.onCloseAutoFocus) === null || u === void 0 || u.call(e, s),
              s.defaultPrevented ||
                (i.current ||
                  (d = o.triggerRef.current) === null ||
                  d === void 0 ||
                  d.focus(),
                s.preventDefault()),
              (i.current = !1);
          },
          onInteractOutside: (s) => {
            var u, d;
            (u = e.onInteractOutside) === null || u === void 0 || u.call(e, s),
              s.defaultPrevented || (i.current = !0);
            const p = s.target;
            !((d = o.triggerRef.current) === null || d === void 0) &&
              d.contains(p) &&
              s.preventDefault();
          },
        })
      )
    );
  }),
  ur = a.exports.forwardRef((e, t) => {
    const {
        __scopePopover: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        disableOutsidePointerEvents: l,
        onEscapeKeyDown: s,
        onPointerDownOutside: u,
        onFocusOutside: d,
        onInteractOutside: p,
        ...m
      } = e,
      g = Ee("PopoverContent", n),
      b = Je(n);
    return (
      Ea(),
      a.exports.createElement(
        wa,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
        },
        a.exports.createElement(
          Pa,
          {
            asChild: !0,
            disableOutsidePointerEvents: l,
            onInteractOutside: p,
            onEscapeKeyDown: s,
            onPointerDownOutside: u,
            onFocusOutside: d,
            onDismiss: () => g.onOpenChange(!1),
          },
          a.exports.createElement(
            ja,
            D(
              { "data-state": fr(g.open), role: "dialog", id: g.contentId },
              b,
              m,
              {
                ref: t,
                style: {
                  ...m.style,
                  "--radix-popover-content-transform-origin":
                    "var(--radix-popper-transform-origin)",
                },
              }
            )
          )
        )
      )
    );
  }),
  Ja = a.exports.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = Ee("PopoverClose", n);
    return a.exports.createElement(
      re.button,
      D({ type: "button" }, r, {
        ref: t,
        onClick: te(e.onClick, () => o.onOpenChange(!1)),
      })
    );
  }),
  es = a.exports.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = Je(n);
    return a.exports.createElement(Ga, D({}, o, r, { ref: t }));
  });
function fr(e) {
  return e ? "open" : "closed";
}
const pr = Ha,
  mr = Ka,
  gr = Xa,
  vr = Ja,
  hr = es,
  ts = oe({
    "0%": { opacity: 0, transform: "translateY(2px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  }),
  ns = oe({
    "0%": { opacity: 0, transform: "translateX(-2px)" },
    "100%": { opacity: 1, transform: "translateX(0)" },
  }),
  rs = oe({
    "0%": { opacity: 0, transform: "translateY(-2px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  }),
  os = oe({
    "0%": { opacity: 0, transform: "translateX(2px)" },
    "100%": { opacity: 1, transform: "translateX(0)" },
  }),
  as = ye(gr, {
    borderRadius: 4,
    padding: 20,
    width: 260,
    boxShadow:
      "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
    "@media (prefers-reduced-motion: no-preference)": {
      animationDuration: "400ms",
      animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      animationFillMode: "forwards",
      willChange: "transform, opacity",
      '&[data-state="open"]': {
        '&[data-side="top"]': { animationName: rs },
        '&[data-side="right"]': { animationName: os },
        '&[data-side="bottom"]': { animationName: ts },
        '&[data-side="left"]': { animationName: ns },
      },
    },
    variants: {
      theme: {
        dark: { backgroundColor: "#1a1a1a", color: "#FFFFFF" },
        light: { backgroundColor: "#FFFFFF", color: "#1a1a1a" },
        whatsapp: {
          background: "var(--background-default)",
          color: "var(--primary)",
        },
      },
    },
  }),
  ss = ye(hr, {
    variants: {
      theme: {
        dark: { fill: "#1a1a1a" },
        light: { fill: "#FFFFFF" },
        whatsapp: { fill: "var(--background-default)" },
      },
    },
  }),
  is = ye(vr, {
    all: "unset",
    fontFamily: "inherit",
    borderRadius: "100%",
    height: 25,
    width: 25,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    border: "1px solid red",
    top: 5,
    right: 5,
    "&:hover": { backgroundColor: U(0.85, "red") },
  }),
  ls = pr,
  cs = mr,
  ds = as,
  us = ss,
  fs = is;
function ps({ children: e, trigger: t, triggerAsChild: n, theme: r, side: o }) {
  return c.createElement(
    ls,
    null,
    c.createElement(cs, { asChild: !!n }, t),
    c.createElement(
      ds,
      { side: o, sideOffset: 5, theme: r },
      e,
      c.createElement(us, { theme: r }),
      c.createElement(
        fs,
        { "aria-label": "Close" },
        c.createElement(Dn, { fill: "red" })
      )
    )
  );
}
function Gt(e) {
  return O.Chat.getModelsArray().find((n) => n.id.toString() === e);
}
function ms({ isOpen: e, onRequestClose: t }) {
  function n() {
    return rt.getFunnels().filter((m) => m.status === "running");
  }
  const [r, o] = a.exports.useState(n());
  a.exports.useEffect(() => {
    setTimeout(() => {
      o(n());
    }, 1e3);
  }, [r]);
  const [i, l] = a.exports.useState(!1),
    s = {
      details: {
        title: "Carregando...",
        okTitle: "Carregando...",
        cancelTitle: "Carregando...",
        fillCancel: "grey",
        fillOk: j.red,
      },
      onRequestOk: async () => {
        console.log("Default onRequestOk Cancel Funnel");
      },
      isOpen: !1,
      onRequestClose: () => {
        l(!1);
      },
    },
    [u, d] = a.exports.useState(s);
  return c.createElement(
    Ln,
    {
      closeTimeoutMS: 400,
      isOpen: e,
      onRequestClose: () => {
        t();
      },
      overlayClassName: "react-modal-overlay",
      className: "react-modal-content relative h-full",
    },
    c.createElement(
      "button",
      {
        type: "button",
        onClick: () => {
          t();
        },
        className: "react-modal-close",
      },
      c.createElement(to, { fill: j.red })
    ),
    c.createElement(
      "h2",
      { className: "text-xl font-bold text-center" },
      r.length > 0 && r.length,
      " ",
      r.length === 1 ? "Funil" : "Funis",
      " em andamento"
    ),
    c.createElement(
      "div",
      { className: "w-full h-full  relative overflow-y-scroll" },
      c.createElement(
        "div",
        { className: "absolute top-0 py-4 flex flex-col items-center w-full" },
        r.length === 0 &&
          c.createElement(
            "span",
            null,
            "Nenhum funil est\xE1 sendo enviado no momento."
          ),
        r.map((p) => {
          var y, S, v, C, E, A;
          const m = p.current
              ? zn((y = p.current) == null ? void 0 : y.type)
              : no,
            g = O.ProfilePicThumb.getModelsArray().find(
              (T) => T.id._serialized === p.targetId
            ),
            b = Gt(p.targetId),
            x =
              ((S = p == null ? void 0 : p.current) == null
                ? void 0
                : S.expectDeliveryTimestamp) &&
              ((v = p == null ? void 0 : p.current) == null
                ? void 0
                : v.expectDeliveryTimestamp) - Date.now(),
            f = x && Math.floor(x / 1e3 / 60),
            h = x && Math.floor((x / 1e3) % 60);
          return c.createElement(
            "div",
            {
              key: p.generatedId,
              className:
                "flex items-center justify-between bg-[var(--panel-header-background)] p-4 rounded-lg my-1 w-full",
            },
            c.createElement(
              "div",
              null,
              c.createElement(
                "div",
                { className: "flex items-center justify-start" },
                c.createElement(
                  "div",
                  { className: "w-12 h-12 p-1 grid place-items-center" },
                  g != null && g.img
                    ? c.createElement("img", {
                        src: g.img,
                        alt: "Foto do contato",
                        className: " w-full h-full rounded-full",
                      })
                    : c.createElement(In, {
                        className:
                          "fill-[var(--avatar-placeholder-primary)] bg-[var(--avatar-placeholder-background)] w-full h-full  rounded-full",
                      })
                ),
                c.createElement(
                  "span",
                  null,
                  b == null ? void 0 : b.formattedTitle,
                  ((C = b == null ? void 0 : b.contact) == null
                    ? void 0
                    : C.isAddressBookContact) === 0 &&
                    ((E = b == null ? void 0 : b.contact) == null
                      ? void 0
                      : E.notifyName) &&
                    ` ( ${
                      (A = b == null ? void 0 : b.contact) == null
                        ? void 0
                        : A.notifyName
                    } )`
                )
              ),
              c.createElement(
                "div",
                { className: "flex items-center justify-start" },
                c.createElement(
                  "div",
                  { className: "w-12 h-12 p-1 grid place-items-center" },
                  c.createElement(Ae, {
                    className: "fill-zap-gold w-3/4 h-3/4",
                  })
                ),
                c.createElement("span", null, p.funnel.name)
              )
            ),
            c.createElement(
              "div",
              { className: "text-left" },
              !!p.current &&
                c.createElement(
                  c.Fragment,
                  null,
                  c.createElement(
                    "div",
                    { className: "flex items-center justify-between" },
                    c.createElement("span", null, "Atual:"),
                    c.createElement(m, null),
                    c.createElement(
                      "span",
                      null,
                      "(",
                      p.current.queuePosition,
                      "/",
                      p.current.queueLength,
                      ")"
                    )
                  ),
                  c.createElement("div", null, "Ser\xE1 enviado em"),
                  c.createElement(
                    "div",
                    { className: "text-center" },
                    f,
                    "min e ",
                    h,
                    "seg"
                  )
                ),
              c.createElement(
                "button",
                {
                  onClick: () => {
                    d({
                      ...u,
                      details: {
                        ...u.details,
                        title: `Tem certeza que deseja cancelar o funil no chat: ${b.formattedTitle}?`,
                        description:
                          "Voc\xEA poder\xE1 reenviar o funil a partir de um item clicando na \u{1F50E} lupa do funil dentro da extens\xE3o",
                        cancelTitle: "Cancelar",
                        okTitle: "Cancelar Funil",
                      },
                      onRequestOk: async () => {
                        l(!1), p.stopFunction();
                      },
                    }),
                      l(!0);
                  },
                  className: "bg-zap-red p-2 rounded-lg mt-2 hover:opacity-80",
                },
                "Cancelar Funil"
              )
            )
          );
        }),
        c.createElement(Bt, { ...u, isOpen: i })
      )
    )
  );
}
async function gs() {
  return new Promise((e, t) => {
    chrome.runtime.sendMessage(
      H,
      { type: "getFlags", data: {} },
      async ({ type: n, response: r }) => n === "getFlags" && e(r)
    );
  });
}
const St = { eventName: "ZVEvent" };
function vs(e) {
  const t = new CustomEvent(St.eventName, { detail: e });
  window.dispatchEvent(t);
}
const br = a.exports.createContext({});
class hs {
  constructor() {
    Ht(this, "fired", !1);
  }
  async fire(t, n) {
    if (!t || !n || this.fired) return;
    this.fired = !0;
    const r = await xo("chave");
    setTimeout(
      () =>
        vs({
          type: "ads",
          item: {
            id: "warning-key",
            title:
              "A chave do Zap Voice que voc\xEA est\xE1 utilizando est\xE1 atribu\xEDda a outro n\xFAmero de telefone.",
            description:
              "*Voc\xEA ainda tem a possibilidade de usar o ZapEC por um tempo para regularizar seu acesso. Clique no bot\xE3o abaixo e entre em contato com o suporte para regulariza\xE7\xE3o o mais breve poss\xEDvel.",
            image:
              "https://zapvoice.com.br/wp-content/uploads/2023/08/Frame-1.png",
            canSetAsSeen: !1,
            footer:
              "Caso nenhuma a\xE7\xE3o seja tomada, o acesso poder\xE1 ser bloqueado em breve",
            cta: {
              text: "Clique para Suporte",
              url: `https://wa.me/5514991238006?text=Recebi%20um%20aviso%20de%20chave%20no%20Zap%20Voice%20e%20gostaria%20de%20resolver%20o%20problema%20chave%20${r}`,
              closeAfterClick: !0,
            },
          },
        }),
      5e3
    );
  }
}
const bs = new hs();
function xs({ children: e }) {
  const { isPremium: t, keyData: n, number_warning: r } = Vt(),
    [o, i] = a.exports.useState({});
  t && r && o.keyWarningAd === !0 && bs.fire(t, r);
  function l() {
    gs().then((s) => {
      s && Object.keys(s).length > 0 && i(s);
    });
  }
  return (
    a.exports.useEffect(() => {
      l();
    }, [t, n]),
    c.createElement(br.Provider, { value: { flags: o, refreshFlags: l } }, e)
  );
}
function Zt() {
  return a.exports.useContext(br);
}
async function ys() {
  return new Promise((e, t) => {
    chrome.runtime.sendMessage(
      H,
      { type: "openOptionsPage", data: {} },
      async ({ type: n, response: r }) => n === "openOptionsPage" && e()
    );
  });
}
function xr({ children: e }) {
  const [t, n] = a.exports.useState(!1);
  function r() {
    n(!0);
  }
  function o() {
    n(!1);
  }
  const {
      shouldAskToSendShortcuts: i,
      shouldHideShortcuts: l,
      shouldHideCurrentFunnelPopover: s,
      shouldMentionAllUsersOnGroup: u,
      toggleShouldAskToSendShortcuts: d,
      toggleShouldHideShortcuts: p,
      toggleShouldHideCurrentFunnelPopover: m,
      toggleShouldMentionAllUsersOnGroup: g,
    } = Ut(),
    { flags: b } = Zt();
  return c.createElement(
    "div",
    { style: { marginLeft: "10px" } },
    c.createElement(
      ps,
      {
        theme: "whatsapp",
        side: "bottom",
        trigger: c.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          },
          e
        ),
      },
      c.createElement(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "100%",
            marginTop: "1rem",
          },
        },
        c.createElement(
          "h1",
          {
            style: {
              fontSize: "1.2rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            },
          },
          "Personaliza\xE7\xE3o ZapEC"
        ),
        c.createElement(
          "div",
          {
            className:
              "grid grid-cols-[1fr_auto] items-center w-full bg-[var(--panel-header-background)] p-1 mb-1 rounded",
          },
          c.createElement("span", null, "Ocultar atalhos"),
          c.createElement(Ne, {
            zvTheme: "dark",
            checked: !!l,
            onChange: p,
            className: "ml-2",
          })
        ),
        c.createElement(
          "div",
          {
            className:
              "grid grid-cols-[1fr_auto] items-center w-full bg-[var(--panel-header-background)] p-1 mb-1 rounded",
          },
          c.createElement("span", null, "Perguntar ao enviar itens \xFAnicos"),
          c.createElement(Ne, {
            zvTheme: "dark",
            checked: !!i,
            onChange: d,
            className: "ml-2",
          })
        ),
        c.createElement(
          "div",
          {
            className:
              "grid grid-cols-[1fr_auto] items-center w-full bg-[var(--panel-header-background)] p-1 mb-1 rounded",
          },
          c.createElement("span", null, "Ocultar indicador do funil atual"),
          c.createElement(Ne, {
            zvTheme: "dark",
            checked: !!s,
            onChange: m,
            className: "ml-2",
          })
        ),
        !!b.mentionAllUsersFromGroup &&
          c.createElement(
            "div",
            {
              className:
                "grid grid-cols-[1fr_auto] items-center w-full bg-[var(--panel-header-background)] p-1 mb-1 rounded",
            },
            c.createElement(
              "span",
              null,
              "Mencionar todos os participantes do grupo ao enviar pelo ZapEC"
            ),
            c.createElement(Ne, {
              zvTheme: "dark",
              checked: !!u,
              onChange: g,
              className: "ml-2",
            })
          ),
        c.createElement(
          "div",
          null,
          c.createElement(
            "button",
            {
              type: "button",
              onClick: () => {
                r();
              },
              className:
                "bg-zap-yellow p-2 mt-2 text-white font-bold rounded flex items-center justify-center ",
            },
            c.createElement(
              "div",
              { className: "w-10 rounded-full grid place-items-center" },
              c.createElement(Ae, { className: "text-white h-full w-full" })
            ),
            "Status dos funis em andamento"
          ),
          c.createElement(ms, { isOpen: t, onRequestClose: o }),
          c.createElement(
            "button",
            {
              onClick: () => {
                ys();
              },
              type: "button",
              className:
                "w-full bg-zap-veryperi p-2 mt-2 text-white font-bold rounded flex items-center justify-center",
            },
            "Abrir Dashboard"
          )
        )
      )
    )
  );
}
function yr(e) {
  return a.exports.createElement(
    "svg",
    {
      width: 128,
      height: 128,
      viewBox: "0 0 128 128",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
    },
    a.exports.createElement("image", {
      href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAygAAAMdCAYAAABwQ1LvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAK0LSURBVHgB7P1XcCRnmiZqvh4CWquESAGk1pKZ1GQmVVWXrmox3SNOsedibtbWunrNju3Frlmzb/bc7FrX7Dl75syOKFZ3T7WsJlmaGiSTKrXWmQASSGitQ/r5P/cAE0AGgBAeEe7h72MWDIHIIESEu7/+/d//ayAioryk63pr7Oby60p1qY7d3rTon7Quul0VuyzXitSMxy6rPbb4flfsekxdJpZ9rVP+o2laJ4iIKO9oICIiR4gFDgkNy68rF91efHGLzthl4fZCoFnyOAMNEZEzMKAQEeWYCh4LgeIgHgaPTcsec1PgyKSF4LJw3YWHQWZchZgLICKinGJAISLKglj1YyFsyHVl7LoVDB92I+HlQuz6IsxhZnLNAENElAUMKEREFlkUQqT60Ra7XgghlD8Wh5eO2PUFFV7GQUREaWNAISJK0rIgchCshJBpceWlHay6EBGlhAGFiGgFsd4QCR8HwCBCqVsILqy4EBElgAGFiAhfhZHjeFgVkdutIMocCS2dMANLOxhaiIgMDChE5DrLKiPHwT4Rso9OPKy2tIOhhYhciAGFiPKeCiQSQJ4HKyPkTBcWXT5iTwsR5TsGFCLKK4uqIxJIjuPh1L5E+WKhp+UjsMpCRHmIAYWIHG1R74hcFqokRG6zOLC0M7AQkZMxoBCRozCQECWEgYWIHIsBhYhsbdGQre+BgYQoVQuB5U0VVtpBRGRjDChEZDuLmtollLCHhMh67eryJth0T0Q2xIBCRDkXq5IsVEjkmoGEKHs6YQaWt8DhYERkAwwoRJQTsSrJd/Gwn4SI7KEdrK4QUQ4xoBBRVizrJfkhWCUhcoJOmIHlp+xdIaJsYUAhoozh0C2ivCJDv9phVlfe4lAwIsoUBhQislQslEiFRALJcRBRvmpXl9dhDgXrBBGRRRhQiChtDCVErtcOhhUisggDChGlhKGEiFbQDoYVIkoDAwoRJYyhhIiS1A4zrLBnhYgSxoBCRKtaNPvWX4CLJhJR6qS5XmYDexNERKtgQCGiuFQwOQ5OCUxE1usEpy4molUwoBDRV2LVkj9Tlx+BoYSIMq8T5hCwn7JfhYgWMKAQuRz7SojIJtrBfhUiAgMKkWtxCBcR2ZSEk4V+lXYQkeswoBC5CKslROQwneryGjhlMZGrMKAQuQCrJUSUB14HqypErsCAQpSnWC0hojzVCbOqwl4VojzFgEKUZ1gtISKXWOhV+UsO/yLKLwwoRHkiFkxkMcXjICJyl3Z1eV0FlZ+CiByPAYXIwbhuCRHREp1gUz2R4zGgEDmQCiatMEMJh3ERET2Kw7+IHIwBhchBOIyLiChpr4OzfxE5CgMKkQMwmBARpe2CuvyYfSpE9seAQmRTi6YJlqFcrSAiIit0qstrDCpE9sWAQmQzbHwnIsqKTjwc/tUJIrINBhQim2AwISLKiU6Y0xSzoZ7IJhhQiHKMwYSIyDZeB4MKUc4xoBDlSGyq4Ndg9pkQEZF9vA4GFaKcYUAhyjIGEyIix3gdDCpEWceAQpQlDCZERI71OhhUiLKGAYUowxhMiIjyxutgUCHKOAYUogxh8zsRUd56HQwqRBnDgEJkMQYTIiLXeA1cR4XIcgwoRBZhMCEicqVOdXldhZS/BBFZggGFyAIqnEgweQ0MJkREbtWpLq+poPJTEFFaGFCI0qCCyXF19RN1aQURERGDClHaGFCIUhALJn+hLsdBRET0qAvq8n32pxAlzwMiSphMGawub6ibH4LhhIiIVnZQXTrUPuMnsenmiShBrKAQJYAN8ERElKbXwBm/iBLCgEK0BjbAExGRRTrB/hSiNTGgEK2AfSZERJQhnerypyqotIOIHsEeFKJl2GdCREQZ1qouH7I/hSg+VlCIYthnQkREOfIaF3okeogBhQhcz4SIiHKuE+xPITIwoJCrxUrrEkyOg4iIKPdeV5e/5Gxf5GYMKORKHM5FREQ2x2Ff5FoMKOQ6HM5FREQO0QnO9kUuxFm8yDWkaqIur8OcnasVRERE9tYKzvZFLsSAQq4QW2yxQ11+CCIiImd5FWZQ4T6MXIFDvCivsQmeiIjyTDvMYV+dIMpTrKBQ3opVTc6D4YSIiPLHcXXpUPu4vwBRnmIFhfKO2mgfhFk1OQgiIqL81akuJ1hNoXzDCgrljVgTvJxRkqoJwwkREeW7VrCaQnmIFRTKC5w6mIiIXK4TrKZQnmAFhRwtVjX5K3DqYCIicrdWsJpCeYIVFHKsWK/JG2AwISIiWqwTrKaQg7GCQo60qNekFURERLRYK1hNIQdjBYUcJbauiVRN2ARPRES0tk6wmkIOwwoKOcaidU0YToiIiBLTClZTyGFYQSHb42rwRERElmgHV6EnB2AFhWxNhZPvgavBExERWeG4unyo9q0/BJGNMaCQLS2aPlj6TapAREREVmhVl9dlHyv7WhDZEId4ke1w+mAiIqKs6AQb6MmGWEEhW1nUCN8KIiIiyqRWsIGebIgVFLIFNsITERHl1Jvq8uesppAdMKBQzqlwchxmOGkFERER5UonzFm+2kGUQxziRTkVKyt/CIYTIiKiXGuFOcsXh3xRTrGCQjnBIV1ERES21g6umUI5woBCWcchXURERI7QCQ75ohzgEC/KKg7pIiIicoxWcMgX5QArKJQVscWgZG2T4yAiIiKn4SxflDUMKJRxXHiRiIgoL3SCCztSFnCIF2VUbOFFDukiIiJyvlaYCzv+CEQZxAoKZYzagP2VuuJGjIiIKP/8WFVS/hxEGcCAQpaLTSEsQ7oOgoiIiPLVBXX5Pod8kdUYUMhS7DchIiJylU6YIeUCiCzCHhSyTKzf5DwYToiIiNyiVV3Osy+FrMSAQpaI9Zv8GERERORGf8X1UsgqHOJFaeH6JkRERLRIO8zV5ztBlCIGFEpZrBmeUwgTERHRYp3geimUBg7xopSocHIc7DchIiKiR7XC7Ev5HohSwIBCSVu0+GIViIiIiB5lDAFnXwqlgkO8KClcfJGIiIiS9JqmaX8JogQxoFBC2AxPREREaXgTZvP8OIjWwIBCa2IzPBEREVmgE2yepwSwB4VWFVsZnuGEiIiI0tWqLh/GTnwSrYgBhVYUm6mL4YSIiIis0grO8EVrYEChuDhTFxEREWXIwgxfnHSH4mJAoUfEpgT8MYiIiIgy5684DTHFwyZ5WoLTCBMREVGWcRpiWoIBhQyxaYQlnLwKIiIioux6XV3+nNMQk2BAoYVwIv0mB0FERESUGxdgTkPMkOJyDCguxzVOiIiIyEY6wbVSXI8BxcUYToiIiMiGOsGQ4moMKC7FcEJEREQ21gmGFNdiQHGhRavDc40TIiIisivpRZGQcgHkKlwHxWUWrQ7PcEJERER2ZkziEzuxSi7CgOIi6gP+QzCcEBERkXPIMcv52DEMuQSHeLlE7IP9OoiIiIic6VVN034KynusoLiACid/BoYTIiIicrbX1THNj0B5jwElz6kP8l+oqx+DiIiIyPn+KnZsQ3mMQ7zyWOwD/BqIiIiI8strmqb9JSgvMaDkKYYTIiIiynMMKXmKASUPMZwQERGRSzCk5CEGlDzDcEJEREQuw5CSZxhQ8gjDCREREbkUQ0oeYUDJEwwnRERE5HIMKXmCASUPMJwQERERGRhS8gADisMxnBAREREtwZDicAwoDsZwQkRERBTXn6uQwoWqHYoBxaFUOPmhunodRERERBTPqyqk/BTkOAwoDsRwQkRERJQQhhQHYkBxGBVOvqeu3gARERERJeKECintIMdgQHEQFU4OqqsP1aUKRERERJSIcZgh5QLIERhQHEKFk1Z1dR4MJ0RERETJYkhxEA/I9mLhhJUTIiIiotTIMdQbsWMqsjlWUGxuUThpBRERERGloxNmJaUTZFsMKDbGcEJERERkuU4wpNgaA4pNqXAipUgJJwdBRERERFaSXhQJKeMg22EPin39BAwnRERERJkgx1hctsGmGFBsSFVP/kpdfQ9ERERElCnH1THXT0C2w4BiM+qD8hfq6kcgIiIiokx7NXbsRTbCHhQbiX1AXgMRERERZdOfa5r2Y5AtMKDYhAonMqSLYyGJiIiIcuNVFVJ+Cso5BhQbUOFEGrW4ECMRERFR7nC1eZtgQMkxrnVCREREZBud4BopOceAkkMMJ0RERES206kuh7hGSu5wFq/ckp6TVhARERGRXbSCfcE5xYCSI7G1TrgQIxEREZH9HI8dq1EOMKDkANc6ISIiIrK9H3GNlNxgD0qWcTphIiIiIkfh9MNZxoCSRbGm+PPgdMJERERETsHph7OMQ7yyZNGMXQwnRERERM4hx25vxI7lKAtYQckS9aaWygmb4omIiIicSSooJzj9cOaxgpIFnLGLiIiIyPHkWI5N81nAgJJhnLGLiIiIKG/IzF48rsswDvHKIPUGPg6z74SIiIiI8ocM9WoHZQQDSoYsaopvBRERERHlE+lDOaRCSifIcgwoGaDCicz2IE3xrSAiIiKifMSm+QxhD0pmSN9JK4iIiIgoX0nT/F+BLMeAYjE2xRMRERG5xqtsmrceh3hZSL1BJUmfBxERERG5CZvmLcQKikViTfFvgIiIiIjc5idcad46rKBYhCvFExEREblau6qinACljRUUC8T6ThhOiIiIiNzruDomZNO8BVhBSZN6I76qrn4CIiIiIiLg+6qS8iYoZQwoaeBijERERES0DBdxTBMDShpUQOkAwwkRERERLXVBBZRDoJSwByVFsb6TVhARERERLXWQ/SipYwUlBew7ISIiIqIEsB8lBQwoSWLfCREREREliP0oKeAQr+TJYoytICIiIiJaXRU46iZpDChJ4HonRERERJQkro+SJA7xSpB6Yx2HObSLiIiIiChZJzRNawetiQElAew7ISIiIqI0dcLsRxkHrYpDvBLzGhhOiIiIiCh1rWA/SkIYUNagqid/pq5+CCIiIiKi9HxPHVv+CLQqDvFaRWxo13mYMzAQEREREaWLUw+vgRWU1UnfCcMJEREREVmFUw+vgQFlBbEphVtBRERERGSt4xzqtTIO8YojNrSrA0REREREmSNDvS6AlmAFJT6ud0JEREREmfaGOjHOdoJlGFCW4dAuIiIiIsqSVnX5C9ASHOK1CFeLJyIiIqIc4CrzizCgxMTKazKlcCuIiIiIiLKnE1xl/isc4vUQh3YRERERUS60gkO9vsIKCji0i4iIiIhsgUO9wIDCoV1EREREZBed4FAvDvECh3YRERERkT20gkO93F1B4YKMRERERGRDrh7q5faAIuGkFURERERE9tEJFw/1cu0QLy7ISEREREQ21aouP4JLubKCwqFdREREROQAUkW5AJdxawWFUwoTERERkd39FVzIdQFFVU/+DBzaRURERET2d1wdu7puqJerhnjFhnZJ9aQVRERERET2J43yMtSrEy7htgrKa2A4ISIiIiLnkEXFXTXUyzUVFFU9eVVd/QRERERERM7jmrVR3BRQuOYJERERETlVJ1yyNoorhnhxzRMiIiIicrhWuGRtlLyvoHDNEyIiIiLKE65omHdDBeU1EBERERE5nzTM531PdV4HlFhj/A9BRERERJQfZG2U48hjeT3Ei43xRERERJSHOpHHDfM+5Ck2xlM+CYZ0zAeAUFhHKBS7DpuPy/1wRD1JByJRHdGI+W90dT8cNc9CeL3mtUfT4PXFbqv6qU89XlCgwe/TUOCHulaPqdt+dbuoSD3XbSslEVFWGNunoNqWqe1acF5dq0tYbcsicgkvvURj18a/U9u0aDT+a3q85nbN2MZ5zWu57/GZ20B/odq+FZjXxm25LjD/HZEDtcJsmH8NeSgvKyhsjCcnkVAxO6djbELH5LSO6VkdU7NR9RgwO2t+bS7wMJRE1HUkYoaSUEQ3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",
      width: "100%",
      height: "100%",
      preserveAspectRatio: "xMidYMid slice",
    })
  );
}
function Es({
  currentActionIndexes: e,
  setFunnelPopUp: t,
  reloadCurrentActionIndexes: n,
}) {
  var x, f, h, y, S;
  const { refreshFlags: r } = Zt(),
    { shouldAskToSendShortcuts: o } = Ut(),
    { isPremium: i, keyData: l, refreshPremium: s } = Vt(),
    [u, d] = a.exports.useState(!1);
  function p(v) {
    d(v != null ? v : !u);
  }
  const m = {
      details: {
        title: "Carregando...",
        okTitle: "Carregando...",
        cancelTitle: "Carregando...",
        fillCancel: "grey",
        fillOk: j.green,
      },
      onRequestOk: async () => {
        console.log("Default onRequestOk SimpleModal");
      },
      isOpen: !1,
      onRequestClose: () => {
        p(!1);
      },
    },
    [g, b] = a.exports.useState(m);
  return c.createElement(
    c.Fragment,
    null,
    c.createElement(
      xr,
      null,
      c.createElement(
        "div",
        { className: " w-7 h-7 mx-2" },
        c.createElement(yr, { style: { width: "100%", height: "100%" } })
      )
    ),
    c.createElement(
      "div",
      {
        id: "actionsContainerZV",
        style: {
          display: "flex",
          flex: 1,
          alignItems: "center",
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
        },
        onWheel: (v) => {
          const { deltaY: C } = v,
            E = document.getElementById("actionsContainerZV");
          E == null ||
            E.scrollTo({ top: 0, left: E.scrollLeft + C, behavior: "smooth" });
        },
      },
      c.createElement(Bt, { ...g, isOpen: u }),
      ((x = e.funis.filter((v) => (v == null ? void 0 : v.data))) == null
        ? void 0
        : x.length) > 0 &&
        e.funis.map(
          (v) =>
            v.data &&
            v.data.length > 0 &&
            c.createElement(
              "div",
              {
                className: "btnSendContainerZV funnelContainer",
                style: { flex: "none" },
                key: v.id,
              },
              c.createElement(
                "button",
                {
                  type: "button",
                  className: "btnSendItemZV funnelBtn",
                  style: {
                    background: U(0.5, j.gold),
                    color: "var(--primary)",
                    fontWeight: "500",
                    padding: "0.25rem",
                    borderRadius: "0.5rem",
                    margin: "0.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  },
                  onClick: () => {
                    if (!i)
                      L.error(
                        `${l} => Funis n\xE3o liberados, considere assinar a vers\xE3o PREMIUM`,
                        { theme: "colored", autoClose: 3e3 }
                      ),
                        s();
                    else {
                      if (!v.data || v.data.length === 0) return;
                      t(v);
                    }
                  },
                },
                c.createElement(
                  "div",
                  {
                    style: {
                      width: "1rem",
                      height: "1rem",
                      marginRight: "0.25rem",
                      display: "grid",
                      placeItems: "center",
                    },
                  },
                  c.createElement(Ae, null)
                ),
                v.name
              )
            )
        ),
      ((f = e.audiosIndex) == null ? void 0 : f.length) > 0 &&
        e.audiosIndex.map((v, C) =>
          c.createElement(
            "div",
            {
              className: "btnSendContainerZV audioContainer",
              style: { flex: "none" },
              key: v == null ? void 0 : v.id,
            },
            c.createElement(
              "button",
              {
                type: "button",
                className: "btnSendItemZV audioBtn",
                style: {
                  background: U(0.5, j.blue),
                  color: "var(--primary)",
                  fontWeight: "500",
                  padding: "0.25rem",
                  borderRadius: "0.5rem",
                  margin: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
                onClick: () => {
                  const E = ee();
                  if (!E) {
                    L.error("Nenhum chat aberto, envio cancelado");
                    return;
                  }
                  o
                    ? (b({
                        ...g,
                        details: {
                          ...g.details,
                          title: `Enviar \xE1udio para ${E.formattedTitle}?`,
                          description: `Item => ${v.name}`,
                          cancelTitle: "Cancelar",
                          okTitle: "Enviar \xC1udio",
                        },
                        onRequestOk: async () => {
                          p(!1),
                            X.add({ itemId: v.id, chatId: E.id.toString() });
                        },
                      }),
                      p(!0))
                    : X.add({ itemId: v.id, chatId: E.id.toString() });
                },
              },
              c.createElement(
                "div",
                {
                  style: {
                    width: "1rem",
                    height: "1rem",
                    marginRight: "0.25rem",
                    display: "grid",
                    placeItems: "center",
                  },
                },
                c.createElement(ro, null)
              ),
              v.name
            )
          )
        ),
      ((h = e.mensagensIndex) == null ? void 0 : h.length) > 0 &&
        e.mensagensIndex.map((v, C) =>
          c.createElement(
            "div",
            {
              className: "btnSendContainerZV messageContainer",
              style: { flex: "none" },
              key: v == null ? void 0 : v.id,
            },
            c.createElement(
              "button",
              {
                type: "button",
                className: "btnSendItemZV messageBtn",
                style: {
                  background: U(0.5, j.purple),
                  color: "var(--primary)",
                  fontWeight: "500",
                  padding: "0.25rem",
                  borderRadius: "0.5rem",
                  margin: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
                onClick: () => {
                  const E = ee();
                  if (!E) {
                    L.error("Nenhum chat aberto, envio cancelado");
                    return;
                  }
                  o
                    ? (b({
                        ...g,
                        details: {
                          ...g.details,
                          title: `Enviar mensagem para ${E.formattedTitle}?`,
                          description: `Item => ${v.name}`,
                          cancelTitle: "Cancelar",
                          okTitle: "Enviar Mensagem",
                        },
                        onRequestOk: async () => {
                          p(!1),
                            X.add({ itemId: v.id, chatId: E.id.toString() });
                        },
                      }),
                      p(!0))
                    : X.add({ itemId: v.id, chatId: E.id.toString() });
                },
              },
              c.createElement(
                "div",
                {
                  style: {
                    width: "1rem",
                    height: "1rem",
                    marginRight: "0.25rem",
                    display: "grid",
                    placeItems: "center",
                  },
                },
                c.createElement(oo, null)
              ),
              v.name
            )
          )
        ),
      ((y = e.mediasIndex) == null ? void 0 : y.length) > 0 &&
        e.mediasIndex.map((v, C) =>
          c.createElement(
            "div",
            {
              className: "btnSendContainerZV mediaContainer",
              style: { flex: "none" },
              key: v == null ? void 0 : v.id,
            },
            c.createElement(
              "button",
              {
                type: "button",
                className: "btnSendItemZV mediaBtn",
                style: {
                  background: U(0.5, j.green),
                  color: "var(--primary)",
                  fontWeight: "500",
                  padding: "0.25rem",
                  borderRadius: "0.5rem",
                  margin: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
                onClick: () => {
                  const E = ee();
                  if (!E) {
                    L.error("Nenhum chat aberto, envio cancelado");
                    return;
                  }
                  o
                    ? (b({
                        ...g,
                        details: {
                          ...g.details,
                          title: `Enviar m\xEDdia para ${E.formattedTitle}?`,
                          description: `Item => ${v.name}`,
                          cancelTitle: "Cancelar",
                          okTitle: "Enviar M\xEDdia",
                        },
                        onRequestOk: async () => {
                          p(!1),
                            X.add({ itemId: v.id, chatId: E.id.toString() });
                        },
                      }),
                      p(!0))
                    : X.add({ itemId: v.id, chatId: E.id.toString() });
                },
              },
              c.createElement(
                "div",
                {
                  style: {
                    width: "1rem",
                    height: "1rem",
                    marginRight: "0.25rem",
                    display: "grid",
                    placeItems: "center",
                  },
                },
                c.createElement(ao, null)
              ),
              v.name
            )
          )
        ),
      ((S = e.docsIndex) == null ? void 0 : S.length) > 0 &&
        e.docsIndex.map((v, C) =>
          c.createElement(
            "div",
            {
              className: "btnSendContainerZV docContainer",
              style: { flex: "none" },
              key: v == null ? void 0 : v.id,
            },
            c.createElement(
              "button",
              {
                type: "button",
                className: "btnSendItemZV docBtn",
                style: {
                  background: U(0.5, j.veryperi),
                  color: "var(--primary)",
                  fontWeight: "500",
                  padding: "0.25rem",
                  borderRadius: "0.5rem",
                  margin: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
                onClick: () => {
                  const E = ee();
                  if (!E) {
                    L.error("Nenhum chat aberto, envio cancelado");
                    return;
                  }
                  o
                    ? (b({
                        ...g,
                        details: {
                          ...g.details,
                          title: `Enviar documento para ${E.formattedTitle}?`,
                          description: `Item => ${v.name}`,
                          cancelTitle: "Cancelar",
                          okTitle: "Enviar Documento",
                        },
                        onRequestOk: async () => {
                          p(!1),
                            X.add({ itemId: v.id, chatId: E.id.toString() });
                        },
                      }),
                      p(!0))
                    : X.add({ itemId: v.id, chatId: E.id.toString() });
                },
              },
              c.createElement(
                "div",
                {
                  style: {
                    width: "1rem",
                    height: "1rem",
                    marginRight: "0.25rem",
                    display: "grid",
                    placeItems: "center",
                  },
                },
                c.createElement(so, null)
              ),
              v.name
            )
          )
        )
    ),
    c.createElement(
      "button",
      {
        type: "button",
        onClick: () => {
          n(),
            r(),
            L.success("Barra de atalhos e funis atualizada com sucesso");
        },
        style: {
          marginLeft: "15px",
          padding: "5px 10px",
          background: j.green,
          borderRadius: "0.5rem",
        },
      },
      c.createElement(io, {
        fill: "white",
        style: { width: "1rem", height: "1rem" },
      })
    )
  );
}
const ut = ({ children: e, container: t, key: n }) =>
    Dt.exports.createPortal(e, t, n),
  ws = oe({
    "0%": { opacity: 0, transform: "translateY(2px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  }),
  Cs = oe({
    "0%": { opacity: 0, transform: "translateX(-2px)" },
    "100%": { opacity: 1, transform: "translateX(0)" },
  }),
  Ss = oe({
    "0%": { opacity: 0, transform: "translateY(-2px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  }),
  $s = oe({
    "0%": { opacity: 0, transform: "translateX(2px)" },
    "100%": { opacity: 1, transform: "translateX(0)" },
  }),
  ks = ye(gr, {
    borderRadius: 4,
    padding: 20,
    width: 260,
    boxShadow:
      "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
    "@media (prefers-reduced-motion: no-preference)": {
      animationDuration: "400ms",
      animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      animationFillMode: "forwards",
      willChange: "transform, opacity",
      '&[data-state="open"]': {
        '&[data-side="top"]': { animationName: Ss },
        '&[data-side="right"]': { animationName: $s },
        '&[data-side="bottom"]': { animationName: ws },
        '&[data-side="left"]': { animationName: Cs },
      },
    },
    variants: {
      theme: {
        dark: { backgroundColor: "#1a1a1a", color: "#FFFFFF" },
        light: { backgroundColor: "#FFFFFF", color: "#1a1a1a" },
        whatsapp: {
          background: "var(--background-default)",
          color: "var(--primary)",
        },
      },
    },
  }),
  Ps = ye(hr, {
    variants: {
      theme: {
        dark: { fill: "#1a1a1a" },
        light: { fill: "#FFFFFF" },
        whatsapp: { fill: "var(--background-default)" },
      },
    },
  }),
  Ms = ye(vr, {
    all: "unset",
    fontFamily: "inherit",
    borderRadius: "100%",
    height: 25,
    width: 25,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    border: "1px solid red",
    top: 5,
    right: 5,
    "&:hover": { backgroundColor: U(0.85, "red") },
  }),
  As = pr,
  Ts = mr,
  Fs = ks,
  Ns = Ps,
  Is = Ms;
function Os({
  children: e,
  trigger: t,
  isOpen: n,
  setIsOpen: r,
  triggerAsChild: o,
  theme: i,
  side: l,
}) {
  return c.createElement(
    As,
    {
      open: n,
      onOpenChange: (s) => {
        r(s);
      },
    },
    c.createElement(Ts, { asChild: !!o }, t),
    c.createElement(
      Fs,
      { side: l, sideOffset: 5, theme: i },
      e,
      c.createElement(Ns, { theme: i }),
      c.createElement(
        Is,
        { "aria-label": "Close" },
        c.createElement(Dn, { fill: "red" })
      )
    )
  );
}
function qe(e) {
  if (!e) {
    const n = ee();
    if (!n) return;
    e = n.id.toString();
  }
  const t = rt.getFunnels();
  return t == null
    ? void 0
    : t.find((n) => n.targetId === e && n.status === "running");
}
function Rs({ foundFunnel: e, reloadFoundFunnel: t, chatId: n }) {
  var d, p, m;
  const r =
      (d = e == null ? void 0 : e.current) != null && d.expectDeliveryTimestamp
        ? ((p = e == null ? void 0 : e.current) == null
            ? void 0
            : p.expectDeliveryTimestamp) - Date.now()
        : 0,
    [o, i] = a.exports.useState(r),
    l =
      (m = e == null ? void 0 : e.current) == null
        ? void 0
        : m.expectDeliveryTimestamp,
    s = Math.floor(o / 1e3 / 60),
    u = Math.floor((o / 1e3) % 60);
  return (
    a.exports.useEffect(() => {
      setTimeout(() => {
        const g = qe(n);
        if (
          ((e == null ? void 0 : e.current) !==
            (g == null ? void 0 : g.current) && t(),
          !Number.isNaN(l) && l !== void 0)
        ) {
          const b = l - Date.now();
          if (b <= 0) {
            t();
            return;
          }
          i(b);
        } else i(0);
      }, 1e3);
    }, [o, e]),
    c.createElement(
      "div",
      { className: "flex flex-col text-center" },
      c.createElement("span", null, "Sera enviado em"),
      c.createElement(
        "span",
        null,
        String(s).padStart(2, "0"),
        "min e",
        " ",
        String(u).padStart(2, "0"),
        "seg"
      )
    )
  );
}
function Ds({ chatId: e, setCurrentFunnel: t }) {
  var h;
  const [n, r] = a.exports.useState(qe(e));
  function o() {
    const y = qe(e);
    r(y);
  }
  const [i, l] = a.exports.useState(!1),
    [s, u] = a.exports.useState(!1),
    d = Gt(e),
    p = {
      details: {
        title: "Carregando...",
        okTitle: "Carregando...",
        cancelTitle: "Carregando...",
        fillCancel: "grey",
        fillOk: j.red,
      },
      onRequestOk: async () => {
        console.log("Default onRequestOk Cancel Funnel");
      },
      isOpen: !1,
      onRequestClose: () => {
        u(!1);
      },
    },
    [m, g] = a.exports.useState(p);
  a.exports.useEffect(() => {
    n || (l(!1), t(void 0));
  }, [n == null ? void 0 : n.current]);
  const b = lo`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`,
    x = Ke.div`
    width: 100%;
    height: 100%;
    background-image: conic-gradient(transparent, #08a6da47, #08a6da);
    border-radius: 50%;
    position: absolute;
    z-index: -2;
    animation: ${b} 2s linear infinite;
  `,
    f = !!(n != null && n.current) && zn(n.current.type);
  return c.createElement(
    Os,
    {
      theme: "whatsapp",
      side: "bottom",
      isOpen: i,
      setIsOpen: l,
      triggerAsChild: !0,
      trigger: c.createElement(
        "div",
        {
          style: {
            display: "grid",
            placeItems: "center",
            filter: "opacity(0.5)",
            width: "4rem",
            height: "4rem",
            position: "absolute",
            top: "4.5rem",
            left: "1rem",
            zIndex: "999999999",
          },
        },
        c.createElement(
          "button",
          {
            type: "button",
            id: "currentFunnelButton",
            style: {
              border: "none",
              width: "90%",
              height: "90%",
              background: j.gold,
              borderRadius: "50%",
            },
          },
          c.createElement(Ae, {
            fill: "white",
            style: { width: "50%", height: "50%", margin: "0 auto" },
          })
        ),
        c.createElement(x, null)
      ),
    },
    c.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100%",
        },
      },
      c.createElement(
        "h2",
        {
          style: {
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          },
        },
        "Funil Atual"
      ),
      c.createElement(
        "span",
        {
          style: { fontSize: "1rem", fontWeight: "bold", marginBottom: "1rem" },
          className: "underline text-base font-bold mt-2",
        },
        (h = n == null ? void 0 : n.funnel) == null ? void 0 : h.name
      ),
      (n == null ? void 0 : n.current) &&
        c.createElement(
          c.Fragment,
          null,
          c.createElement("span", null, "---------------"),
          c.createElement("span", null, "Pr\xF3ximo item"),
          c.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            },
            f && c.createElement(f, null),
            c.createElement(
              "span",
              null,
              "(",
              n.current.queuePosition,
              "/",
              n.current.queueLength,
              ")"
            )
          ),
          c.createElement(Rs, {
            foundFunnel: n,
            reloadFoundFunnel: o,
            chatId: e,
          })
        ),
      c.createElement(Bt, { ...m, isOpen: s }),
      c.createElement(
        "button",
        {
          className:
            "border-none p-2 rounded text-base font-bold text-white bg-zap-red mt-4",
          type: "button",
          onClick: () => {
            g({
              ...m,
              details: {
                ...m.details,
                title: `Tem certeza que deseja cancelar o funil no chat: ${d.formattedTitle}?`,
                description:
                  "Voc\xEA poder\xE1 reenviar o funil a partir de um item clicando na \u{1F50E} lupa do funil dentro da extens\xE3o",
                cancelTitle: "Cancelar",
                okTitle: "Cancelar Funil",
              },
              onRequestOk: async () => {
                u(!1), n == null || n.stopFunction(), l(!1), t(void 0);
              },
            }),
              u(!0);
          },
        },
        "CANCELAR FUNIL"
      )
    )
  );
}
const Ls = { eventName: "ZVEventPTC" };
function He(e) {
  const t = new CustomEvent(Ls.eventName, { detail: e });
  window.dispatchEvent(t);
}
async function zs(e, t, n) {
  return new Promise((r) => {
    const o = Xe();
    let i = !1;
    function l() {
      (i = !0), r(!0), window.removeEventListener(o, l);
    }
    window.addEventListener(o, l),
      setTimeout(() => {
        i || l();
      }, 1500),
      He({
        type: "sendFunnel",
        funnelId: e,
        chatTargetId: t,
        promiseId: o,
        secondsBeforeSend: n,
      });
  });
}
async function Bs(e, t, n, r, o) {
  return new Promise((i) => {
    var p;
    const l = o || Xe(),
      s = t || ee();
    let u = !1;
    function d() {
      (u = !0), i(!0), window.removeEventListener(l, d);
    }
    window.addEventListener(l, d),
      setTimeout(() => {
        u || d();
      }, 1500),
      He({
        type: "sendItem",
        itemId: e,
        chatTargetId:
          (p = s == null ? void 0 : s.id) == null ? void 0 : p.toString(),
        promiseId: l,
        avoidToast: n,
        premium: r,
      });
  });
}
function _s(e) {
  return a.exports.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      style: { margin: "auto", background: "0 0" },
      width: "200px",
      height: "200px",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      display: "block",
      ...e,
    },
    a.exports.createElement(
      "circle",
      {
        cx: 50,
        cy: 50,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 10,
        r: 35,
        strokeDasharray: "164.93361431346415 56.97787143782138",
      },
      a.exports.createElement("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        repeatCount: "indefinite",
        dur: "1s",
        values: "0 50 50;360 50 50",
        keyTimes: "0;1",
      })
    )
  );
}
const Ws = Ke.div`
  display: ${({ isVisible: e }) => (e ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 9999;
  #bulkPreviewContainer {
    width: 90%;
    max-width: 35rem;
    height: 100%;
    border-radius: 0.25rem;
    padding: 1rem;
    box-shadow: 0px 0px 15px -5px black;
    background: var(--background-default);
    color: var(--primary);
    text-align: center;
    display: grid;
    grid-template-rows: 4rem 1fr 4rem;
    header {
      h1 {
        color: var(--primary-strong);
        font-size: 1.5rem;
        margin-top: 0.25rem;
      }
      span {
        font-size: 1rem;
        b {
          margin: 0 0.5rem;
          font-weight: bold;
          &.pendingCount {
            color: ${j.gold};
          }
          &.successCount {
            color: ${j.green};
          }
          &.errorCount {
            color: ${j.red};
          }
        }
      }
    }
    #bulkDetails {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-height: 70vh;
      #delayWrapper {
        margin-bottom: 1rem;
      }
      #tableWrapper {
        height: 100%;
        overflow-y: scroll;
        table {
          width: 100%;
          table-layout: fixed;
          overflow: hidden;
          margin-bottom: 5rem;
          thead {
            background: var(--active-tab-marker);
            th {
              text-align: center;
              padding: 0.5rem 0;
              font-size: 1rem;
              font-weight: 700;
              border: 0.5px solid var(--secondary);
            }
          }
          tbody {
            tr {
              td {
                text-align: center;
                padding: 0.25rem 0.5rem;
                border: 0.5px solid var(--secondary);
              }
            }
          }
        }
      }
    }
    #bulkActionContainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      button {
        width: 10rem;
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-size: 1rem;
        font-weight: 600;
        color: var(--primary);
        transition: filter 0.2s;
        &:hover {
          filter: brightness(1.2);
        }
        &#cancelBtn {
          background: ${U(0.3, "#FF5151")};
        }
        &#sendBtn {
          background: ${U(0.3, "#09CAA7")};
        }
      }
    }
  }
`,
  Vs = Ke.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;
  border-radius: 0.25rem;
  background: ${({ props: e }) => U(0.7, e.fill)};
  color: ${({ props: e }) => e.textColor};
  .iconWrapper {
    width: 1.25rem;
    height: 1.25rem;
    margin: 0px 0.5rem;
    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
  span {
    text-align: left;
    width: 100%;
    color: ${({ props: e }) => (e.textColor ? e.textColor : e.fill)};
    font-size: 0.75rem;
    font-weight: bold;
  }
`;
function Us(e) {
  const { Icon: t, title: n, fill: r, textColor: o, spin: i } = e;
  return c.createElement(
    Vs,
    { props: e },
    c.createElement(
      "div",
      { className: "iconWrapper" },
      c.createElement(t, { size: 20, fill: r, color: r })
    ),
    c.createElement("span", { style: { color: o } }, n)
  );
}
function js(e) {
  switch (e) {
    case "pending":
      return {
        Icon: xt,
        title: "Na fila",
        fill: "grey",
        textColor: "var(--primary);",
      };
    case "running":
      return { Icon: _s, title: "Carregando...", fill: j.blue };
    case "success":
      return { Icon: uo, title: "Enviado", fill: j.green };
    case "error":
      return { Icon: co, title: "Erro", fill: j.red };
    default:
      return {
        Icon: xt,
        title: "Na fila",
        fill: "grey",
        textColor: "var(--primary);",
      };
  }
}
const $t = [];
function Gs() {
  for (; $t.length > 0; ) {
    const e = $t.shift();
    e && e();
  }
}
function Zs({ bulk: e }) {
  const [t, n] = a.exports.useState(!1),
    [r, o] = a.exports.useState(!1),
    [i, l] = a.exports.useState(!1),
    [s, u] = a.exports.useState(),
    [d, p] = a.exports.useState([]),
    [m, g] = a.exports.useState();
  function b(x, f) {
    const { status: h, target: y, message: S } = x,
      v = (f || d).map((E) =>
        E.phone_number === y ? { ...E, status: h, message: S } : E
      );
    p(v);
    const C = v.reduce(
      (E, A) => (
        A.status === "success"
          ? (E.success += 1)
          : A.status === "error"
          ? (E.error += 1)
          : (E.pending += 1),
        E
      ),
      { pending: 0, success: 0, error: 0 }
    );
    return g(C), C.pending === 0 && (l(!0), o(!1)), v;
  }
  return (
    a.exports.useEffect(() => {
      try {
        if ((n(!0), r)) {
          L.error(
            "J\xE1 existe um disparo em andamento, aguarde o t\xE9rmino do mesmo para iniciar um novo disparo."
          );
          return;
        }
        if ((l(!1), o(!1), !e)) {
          L.error(
            "Disparo carregado incorretamente, recarregue a p\xE1gina e tente novamente"
          ),
            u(void 0),
            n(!1);
          return;
        }
        u(e);
      } catch (x) {
        console.log(x), L.error(x.toString()), u(void 0), n(!1);
      }
    }, [e]),
    a.exports.useEffect(() => {
      var x, f, h;
      p(
        (x = s == null ? void 0 : s.targetNumbers) != null && x.length
          ? s.targetNumbers.map((y) => ({
              phone_number: y,
              status: "pending",
              message: "Na fila",
            }))
          : []
      ),
        (f = s == null ? void 0 : s.targetNumbers) != null &&
          f.length &&
          g({
            error: 0,
            success: 0,
            pending:
              (h = s == null ? void 0 : s.targetNumbers) == null
                ? void 0
                : h.length,
          });
    }, [s]),
    c.createElement(
      Ws,
      { isVisible: t },
      s && d.length
        ? c.createElement(
            "div",
            { id: "bulkPreviewContainer" },
            c.createElement(
              "header",
              null,
              c.createElement(
                "h1",
                null,
                !r && !i && "Confirma o envio do disparo abaixo?",
                !r && !!i && "Disparo Finalizado com sucesso!",
                !!r && "Disparo em andamento..."
              ),
              m &&
                c.createElement(
                  "span",
                  null,
                  "Pendentes",
                  c.createElement(
                    "b",
                    { className: "pendingCount" },
                    m.pending
                  ),
                  "Enviados",
                  c.createElement(
                    "b",
                    { className: "successCount" },
                    m.success
                  ),
                  "Falhas",
                  c.createElement("b", { className: "errorCount" }, m.error)
                )
            ),
            c.createElement(
              "div",
              { id: "bulkDetails" },
              c.createElement(
                "div",
                { id: "delayWrapper" },
                "Delay entre n\xFAmeros: ",
                s.delay.min,
                " seg -",
                " ",
                s.delay.max,
                " seg"
              ),
              c.createElement(
                "div",
                { id: "tableWrapper" },
                c.createElement(
                  "table",
                  null,
                  c.createElement(
                    "colgroup",
                    null,
                    c.createElement("col", { style: { width: "65%" } }),
                    c.createElement("col", { style: { width: "35%" } })
                  ),
                  c.createElement(
                    "thead",
                    null,
                    c.createElement(
                      "tr",
                      null,
                      c.createElement("th", null, "Enviar para"),
                      c.createElement("th", null, "Status")
                    )
                  ),
                  c.createElement(
                    "tbody",
                    null,
                    d.map((x, f) =>
                      c.createElement(
                        "tr",
                        { key: `${f} - ${x.phone_number}` },
                        c.createElement("td", null, x.phone_number),
                        c.createElement(
                          "td",
                          null,
                          c.createElement(Us, {
                            ...js(x.status),
                            ...(x.message && { title: x.message }),
                          })
                        )
                      )
                    )
                  )
                )
              )
            ),
            c.createElement(
              "div",
              { id: "bulkActionContainer" },
              r &&
                c.createElement(
                  "button",
                  {
                    type: "button",
                    id: "cancelBtn",
                    onClick: () => {
                      L.warning("Disparo cancelado!"), Gs(), l(!0), o(!1);
                    },
                  },
                  "Interromper Disparo"
                ),
              !r &&
                !i &&
                c.createElement(
                  c.Fragment,
                  null,
                  c.createElement(
                    "button",
                    {
                      type: "button",
                      id: "cancelBtn",
                      onClick: () => {
                        n(!1);
                      },
                    },
                    "Cancelar"
                  ),
                  c.createElement(
                    "button",
                    {
                      type: "button",
                      id: "sendBtn",
                      onClick: () => {
                        o(!0);
                        const x = Vl(s, b);
                        $t.push(x);
                      },
                    },
                    "Enviar"
                  )
                ),
              i &&
                c.createElement(
                  "button",
                  {
                    type: "button",
                    id: "cancelBtn",
                    onClick: () => {
                      n(!1), l(!1), o(!1), u(void 0), p([]), g(void 0);
                    },
                  },
                  "Limpar Tudo e Fechar"
                )
            )
          )
        : c.createElement("h1", null, "Carregando...")
    )
  );
}
function ce(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function qs(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Hs(...e) {
  return (t) => e.forEach((n) => qs(n, t));
}
function Te(...e) {
  return a.exports.useCallback(Hs(...e), e);
}
function Ks(e, t = []) {
  let n = [];
  function r(i, l) {
    const s = a.exports.createContext(l),
      u = n.length;
    n = [...n, l];
    function d(m) {
      const { scope: g, children: b, ...x } = m,
        f = (g == null ? void 0 : g[e][u]) || s,
        h = a.exports.useMemo(() => x, Object.values(x));
      return a.exports.createElement(f.Provider, { value: h }, b);
    }
    function p(m, g) {
      const b = (g == null ? void 0 : g[e][u]) || s,
        x = a.exports.useContext(b);
      if (x) return x;
      if (l !== void 0) return l;
      throw new Error(`\`${m}\` must be used within \`${i}\``);
    }
    return (d.displayName = i + "Provider"), [d, p];
  }
  const o = () => {
    const i = n.map((l) => a.exports.createContext(l));
    return function (s) {
      const u = (s == null ? void 0 : s[e]) || i;
      return a.exports.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: u } }),
        [s, u]
      );
    };
  };
  return (o.scopeName = e), [r, Xs(o, ...t)];
}
function Xs(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const l = r.reduce((s, { useScope: u, scopeName: d }) => {
        const m = u(i)[`__scope${d}`];
        return { ...s, ...m };
      }, {});
      return a.exports.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
const kt = Boolean(globalThis == null ? void 0 : globalThis.document)
    ? a.exports.useLayoutEffect
    : () => {},
  Ys = fo["useId".toString()] || (() => {});
let Qs = 0;
function ft(e) {
  const [t, n] = a.exports.useState(Ys());
  return (
    kt(() => {
      e || n((r) => (r != null ? r : String(Qs++)));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
function de(e) {
  const t = a.exports.useRef(e);
  return (
    a.exports.useEffect(() => {
      t.current = e;
    }),
    a.exports.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) === null || r === void 0
            ? void 0
            : r.call(t, ...n);
        },
      []
    )
  );
}
function Js({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = ei({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    l = i ? e : r,
    s = de(n),
    u = a.exports.useCallback(
      (d) => {
        if (i) {
          const m = typeof d == "function" ? d(e) : d;
          m !== e && s(m);
        } else o(d);
      },
      [i, e, o, s]
    );
  return [l, u];
}
function ei({ defaultProp: e, onChange: t }) {
  const n = a.exports.useState(e),
    [r] = n,
    o = a.exports.useRef(r),
    i = de(t);
  return (
    a.exports.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
function ti(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function ni(...e) {
  return (t) => e.forEach((n) => ti(n, t));
}
const et = a.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = a.exports.Children.toArray(n),
    i = o.find(oi);
  if (i) {
    const l = i.props.children,
      s = o.map((u) =>
        u === i
          ? a.exports.Children.count(l) > 1
            ? a.exports.Children.only(null)
            : a.exports.isValidElement(l)
            ? l.props.children
            : null
          : u
      );
    return a.exports.createElement(
      Pt,
      D({}, r, { ref: t }),
      a.exports.isValidElement(l) ? a.exports.cloneElement(l, void 0, s) : null
    );
  }
  return a.exports.createElement(Pt, D({}, r, { ref: t }), n);
});
et.displayName = "Slot";
const Pt = a.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return a.exports.isValidElement(n)
    ? a.exports.cloneElement(n, {
        ...ai(r, n.props),
        ref: t ? ni(t, n.ref) : n.ref,
      })
    : a.exports.Children.count(n) > 1
    ? a.exports.Children.only(null)
    : null;
});
Pt.displayName = "SlotClone";
const ri = ({ children: e }) =>
  a.exports.createElement(a.exports.Fragment, null, e);
function oi(e) {
  return a.exports.isValidElement(e) && e.type === ri;
}
function ai(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...s) => {
            i(...s), o(...s);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...i })
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
const si = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  fe = si.reduce((e, t) => {
    const n = a.exports.forwardRef((r, o) => {
      const { asChild: i, ...l } = r,
        s = i ? et : t;
      return (
        a.exports.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        a.exports.createElement(s, D({}, l, { ref: o }))
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function ii(e, t) {
  e && Dt.exports.flushSync(() => e.dispatchEvent(t));
}
function li(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = de(e);
  a.exports.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r),
      () => t.removeEventListener("keydown", r)
    );
  }, [n, t]);
}
const Mt = "dismissableLayer.update",
  ci = "dismissableLayer.pointerDownOutside",
  di = "dismissableLayer.focusOutside";
let bn;
const ui = a.exports.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  fi = a.exports.forwardRef((e, t) => {
    var n;
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: i,
        onFocusOutside: l,
        onInteractOutside: s,
        onDismiss: u,
        ...d
      } = e,
      p = a.exports.useContext(ui),
      [m, g] = a.exports.useState(null),
      b =
        (n = m == null ? void 0 : m.ownerDocument) !== null && n !== void 0
          ? n
          : globalThis == null
          ? void 0
          : globalThis.document,
      [, x] = a.exports.useState({}),
      f = Te(t, (M) => g(M)),
      h = Array.from(p.layers),
      [y] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
      S = h.indexOf(y),
      v = m ? h.indexOf(m) : -1,
      C = p.layersWithOutsidePointerEventsDisabled.size > 0,
      E = v >= S,
      A = pi((M) => {
        const w = M.target,
          $ = [...p.branches].some((F) => F.contains(w));
        !E ||
          $ ||
          (i == null || i(M),
          s == null || s(M),
          M.defaultPrevented || u == null || u());
      }, b),
      T = mi((M) => {
        const w = M.target;
        [...p.branches].some((F) => F.contains(w)) ||
          (l == null || l(M),
          s == null || s(M),
          M.defaultPrevented || u == null || u());
      }, b);
    return (
      li((M) => {
        v === p.layers.size - 1 &&
          (o == null || o(M),
          !M.defaultPrevented && u && (M.preventDefault(), u()));
      }, b),
      a.exports.useEffect(() => {
        if (!!m)
          return (
            r &&
              (p.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((bn = b.body.style.pointerEvents),
                (b.body.style.pointerEvents = "none")),
              p.layersWithOutsidePointerEventsDisabled.add(m)),
            p.layers.add(m),
            xn(),
            () => {
              r &&
                p.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (b.body.style.pointerEvents = bn);
            }
          );
      }, [m, b, r, p]),
      a.exports.useEffect(
        () => () => {
          !m ||
            (p.layers.delete(m),
            p.layersWithOutsidePointerEventsDisabled.delete(m),
            xn());
        },
        [m, p]
      ),
      a.exports.useEffect(() => {
        const M = () => x({});
        return (
          document.addEventListener(Mt, M),
          () => document.removeEventListener(Mt, M)
        );
      }, []),
      a.exports.createElement(
        fe.div,
        D({}, d, {
          ref: f,
          style: {
            pointerEvents: C ? (E ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: ce(e.onFocusCapture, T.onFocusCapture),
          onBlurCapture: ce(e.onBlurCapture, T.onBlurCapture),
          onPointerDownCapture: ce(
            e.onPointerDownCapture,
            A.onPointerDownCapture
          ),
        })
      )
    );
  });
function pi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = de(e),
    r = a.exports.useRef(!1),
    o = a.exports.useRef(() => {});
  return (
    a.exports.useEffect(() => {
      const i = (s) => {
          if (s.target && !r.current) {
            let d = function () {
              Er(ci, n, u, { discrete: !0 });
            };
            const u = { originalEvent: s };
            s.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = d),
                t.addEventListener("click", o.current, { once: !0 }))
              : d();
          }
          r.current = !1;
        },
        l = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(l),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function mi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = de(e),
    r = a.exports.useRef(!1);
  return (
    a.exports.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          Er(di, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function xn() {
  const e = new CustomEvent(Mt);
  document.dispatchEvent(e);
}
function Er(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? ii(o, i) : o.dispatchEvent(i);
}
const pt = "focusScope.autoFocusOnMount",
  mt = "focusScope.autoFocusOnUnmount",
  yn = { bubbles: !1, cancelable: !0 },
  gi = a.exports.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...l
      } = e,
      [s, u] = a.exports.useState(null),
      d = de(o),
      p = de(i),
      m = a.exports.useRef(null),
      g = Te(t, (f) => u(f)),
      b = a.exports.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    a.exports.useEffect(() => {
      if (r) {
        let f = function (v) {
            if (b.paused || !s) return;
            const C = v.target;
            s.contains(C) ? (m.current = C) : J(m.current, { select: !0 });
          },
          h = function (v) {
            if (b.paused || !s) return;
            const C = v.relatedTarget;
            C !== null && (s.contains(C) || J(m.current, { select: !0 }));
          },
          y = function (v) {
            const C = document.activeElement;
            for (const E of v)
              E.removedNodes.length > 0 &&
                ((s != null && s.contains(C)) || J(s));
          };
        document.addEventListener("focusin", f),
          document.addEventListener("focusout", h);
        const S = new MutationObserver(y);
        return (
          s && S.observe(s, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", f),
              document.removeEventListener("focusout", h),
              S.disconnect();
          }
        );
      }
    }, [r, s, b.paused]),
      a.exports.useEffect(() => {
        if (s) {
          wn.add(b);
          const f = document.activeElement;
          if (!s.contains(f)) {
            const y = new CustomEvent(pt, yn);
            s.addEventListener(pt, d),
              s.dispatchEvent(y),
              y.defaultPrevented ||
                (vi(Ei(wr(s)), { select: !0 }),
                document.activeElement === f && J(s));
          }
          return () => {
            s.removeEventListener(pt, d),
              setTimeout(() => {
                const y = new CustomEvent(mt, yn);
                s.addEventListener(mt, p),
                  s.dispatchEvent(y),
                  y.defaultPrevented ||
                    J(f != null ? f : document.body, { select: !0 }),
                  s.removeEventListener(mt, p),
                  wn.remove(b);
              }, 0);
          };
        }
      }, [s, d, p, b]);
    const x = a.exports.useCallback(
      (f) => {
        if ((!n && !r) || b.paused) return;
        const h = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey,
          y = document.activeElement;
        if (h && y) {
          const S = f.currentTarget,
            [v, C] = hi(S);
          v && C
            ? !f.shiftKey && y === C
              ? (f.preventDefault(), n && J(v, { select: !0 }))
              : f.shiftKey &&
                y === v &&
                (f.preventDefault(), n && J(C, { select: !0 }))
            : y === S && f.preventDefault();
        }
      },
      [n, r, b.paused]
    );
    return a.exports.createElement(
      fe.div,
      D({ tabIndex: -1 }, l, { ref: g, onKeyDown: x })
    );
  });
function vi(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((J(r, { select: t }), document.activeElement !== n)) return;
}
function hi(e) {
  const t = wr(e),
    n = En(t, e),
    r = En(t.reverse(), e);
  return [n, r];
}
function wr(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function En(e, t) {
  for (const n of e) if (!bi(n, { upTo: t })) return n;
}
function bi(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function xi(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function J(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && xi(e) && t && e.select();
  }
}
const wn = yi();
function yi() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = Cn(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = Cn(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
    },
  };
}
function Cn(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ei(e) {
  return e.filter((t) => t.tagName !== "A");
}
const wi = a.exports.forwardRef((e, t) => {
  var n;
  const {
    container: r = globalThis == null ||
    (n = globalThis.document) === null ||
    n === void 0
      ? void 0
      : n.body,
    ...o
  } = e;
  return r
    ? Rn.createPortal(a.exports.createElement(fe.div, D({}, o, { ref: t })), r)
    : null;
});
function Ci(e, t) {
  return a.exports.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const tt = (e) => {
  const { present: t, children: n } = e,
    r = Si(t),
    o =
      typeof n == "function"
        ? n({ present: r.isPresent })
        : a.exports.Children.only(n),
    i = Te(r.ref, o.ref);
  return typeof n == "function" || r.isPresent
    ? a.exports.cloneElement(o, { ref: i })
    : null;
};
tt.displayName = "Presence";
function Si(e) {
  const [t, n] = a.exports.useState(),
    r = a.exports.useRef({}),
    o = a.exports.useRef(e),
    i = a.exports.useRef("none"),
    l = e ? "mounted" : "unmounted",
    [s, u] = Ci(l, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    a.exports.useEffect(() => {
      const d = _e(r.current);
      i.current = s === "mounted" ? d : "none";
    }, [s]),
    kt(() => {
      const d = r.current,
        p = o.current;
      if (p !== e) {
        const g = i.current,
          b = _e(d);
        e
          ? u("MOUNT")
          : b === "none" || (d == null ? void 0 : d.display) === "none"
          ? u("UNMOUNT")
          : u(p && g !== b ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, u]),
    kt(() => {
      if (t) {
        const d = (m) => {
            const b = _e(r.current).includes(m.animationName);
            m.target === t &&
              b &&
              Dt.exports.flushSync(() => u("ANIMATION_END"));
          },
          p = (m) => {
            m.target === t && (i.current = _e(r.current));
          };
        return (
          t.addEventListener("animationstart", p),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            t.removeEventListener("animationstart", p),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d);
          }
        );
      } else u("ANIMATION_END");
    }, [t, u]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(s),
      ref: a.exports.useCallback((d) => {
        d && (r.current = getComputedStyle(d)), n(d);
      }, []),
    }
  );
}
function _e(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let gt = 0;
function $i() {
  a.exports.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement(
        "afterbegin",
        (e = n[0]) !== null && e !== void 0 ? e : Sn()
      ),
      document.body.insertAdjacentElement(
        "beforeend",
        (t = n[1]) !== null && t !== void 0 ? t : Sn()
      ),
      gt++,
      () => {
        gt === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((r) => r.remove()),
          gt--;
      }
    );
  }, []);
}
function Sn() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
var Cr = Xn(),
  vt = function () {},
  nt = a.exports.forwardRef(function (e, t) {
    var n = a.exports.useRef(null),
      r = a.exports.useState({
        onScrollCapture: vt,
        onWheelCapture: vt,
        onTouchMoveCapture: vt,
      }),
      o = r[0],
      i = r[1],
      l = e.forwardProps,
      s = e.children,
      u = e.className,
      d = e.removeScrollBar,
      p = e.enabled,
      m = e.shards,
      g = e.sideCar,
      b = e.noIsolation,
      x = e.inert,
      f = e.allowPinchZoom,
      h = e.as,
      y = h === void 0 ? "div" : h,
      S = zt(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
      ]),
      v = g,
      C = Kn([n, t]),
      E = G(G({}, S), o);
    return a.exports.createElement(
      a.exports.Fragment,
      null,
      p &&
        a.exports.createElement(v, {
          sideCar: Cr,
          removeScrollBar: d,
          shards: m,
          noIsolation: b,
          inert: x,
          setCallbacks: i,
          allowPinchZoom: !!f,
          lockRef: n,
        }),
      l
        ? a.exports.cloneElement(
            a.exports.Children.only(s),
            G(G({}, E), { ref: C })
          )
        : a.exports.createElement(y, G({}, E, { className: u, ref: C }), s)
    );
  });
nt.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
nt.classNames = { fullWidth: ke, zeroRight: $e };
var At = !1;
if (typeof window < "u")
  try {
    var We = Object.defineProperty({}, "passive", {
      get: function () {
        return (At = !0), !0;
      },
    });
    window.addEventListener("test", We, We),
      window.removeEventListener("test", We, We);
  } catch {
    At = !1;
  }
var he = At ? { passive: !1 } : !1,
  ki = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Sr = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !ki(e) && n[t] === "visible")
    );
  },
  Pi = function (e) {
    return Sr(e, "overflowY");
  },
  Mi = function (e) {
    return Sr(e, "overflowX");
  },
  $n = function (e, t) {
    var n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var r = $r(e, n);
      if (r) {
        var o = kr(e, n),
          i = o[1],
          l = o[2];
        if (i > l) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  Ai = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  Ti = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  $r = function (e, t) {
    return e === "v" ? Pi(t) : Mi(t);
  },
  kr = function (e, t) {
    return e === "v" ? Ai(t) : Ti(t);
  },
  Fi = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  Ni = function (e, t, n, r, o) {
    var i = Fi(e, window.getComputedStyle(t).direction),
      l = i * r,
      s = n.target,
      u = t.contains(s),
      d = !1,
      p = l > 0,
      m = 0,
      g = 0;
    do {
      var b = kr(e, s),
        x = b[0],
        f = b[1],
        h = b[2],
        y = f - h - i * x;
      (x || y) && $r(e, s) && ((m += y), (g += x)), (s = s.parentNode);
    } while ((!u && s !== document.body) || (u && (t.contains(s) || t === s)));
    return (
      ((p && ((o && m === 0) || (!o && l > m))) ||
        (!p && ((o && g === 0) || (!o && -l > g)))) &&
        (d = !0),
      d
    );
  },
  Ve = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  kn = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Pn = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Ii = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Oi = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  Ri = 0,
  be = [];
function Di(e) {
  var t = a.exports.useRef([]),
    n = a.exports.useRef([0, 0]),
    r = a.exports.useRef(),
    o = a.exports.useState(Ri++)[0],
    i = a.exports.useState(function () {
      return jt();
    })[0],
    l = a.exports.useRef(e);
  a.exports.useEffect(
    function () {
      l.current = e;
    },
    [e]
  ),
    a.exports.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var f = Bn([e.lockRef.current], (e.shards || []).map(Pn), !0).filter(
            Boolean
          );
          return (
            f.forEach(function (h) {
              return h.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                f.forEach(function (h) {
                  return h.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var s = a.exports.useCallback(function (f, h) {
      if ("touches" in f && f.touches.length === 2)
        return !l.current.allowPinchZoom;
      var y = Ve(f),
        S = n.current,
        v = "deltaX" in f ? f.deltaX : S[0] - y[0],
        C = "deltaY" in f ? f.deltaY : S[1] - y[1],
        E,
        A = f.target,
        T = Math.abs(v) > Math.abs(C) ? "h" : "v";
      if ("touches" in f && T === "h" && A.type === "range") return !1;
      var M = $n(T, A);
      if (!M) return !0;
      if ((M ? (E = T) : ((E = T === "v" ? "h" : "v"), (M = $n(T, A))), !M))
        return !1;
      if (
        (!r.current && "changedTouches" in f && (v || C) && (r.current = E), !E)
      )
        return !0;
      var w = r.current || E;
      return Ni(w, h, f, w === "h" ? v : C, !0);
    }, []),
    u = a.exports.useCallback(function (f) {
      var h = f;
      if (!(!be.length || be[be.length - 1] !== i)) {
        var y = "deltaY" in h ? kn(h) : Ve(h),
          S = t.current.filter(function (E) {
            return E.name === h.type && E.target === h.target && Ii(E.delta, y);
          })[0];
        if (S && S.should) {
          h.cancelable && h.preventDefault();
          return;
        }
        if (!S) {
          var v = (l.current.shards || [])
              .map(Pn)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(h.target);
              }),
            C = v.length > 0 ? s(h, v[0]) : !l.current.noIsolation;
          C && h.cancelable && h.preventDefault();
        }
      }
    }, []),
    d = a.exports.useCallback(function (f, h, y, S) {
      var v = { name: f, delta: h, target: y, should: S };
      t.current.push(v),
        setTimeout(function () {
          t.current = t.current.filter(function (C) {
            return C !== v;
          });
        }, 1);
    }, []),
    p = a.exports.useCallback(function (f) {
      (n.current = Ve(f)), (r.current = void 0);
    }, []),
    m = a.exports.useCallback(function (f) {
      d(f.type, kn(f), f.target, s(f, e.lockRef.current));
    }, []),
    g = a.exports.useCallback(function (f) {
      d(f.type, Ve(f), f.target, s(f, e.lockRef.current));
    }, []);
  a.exports.useEffect(function () {
    return (
      be.push(i),
      e.setCallbacks({
        onScrollCapture: m,
        onWheelCapture: m,
        onTouchMoveCapture: g,
      }),
      document.addEventListener("wheel", u, he),
      document.addEventListener("touchmove", u, he),
      document.addEventListener("touchstart", p, he),
      function () {
        (be = be.filter(function (f) {
          return f !== i;
        })),
          document.removeEventListener("wheel", u, he),
          document.removeEventListener("touchmove", u, he),
          document.removeEventListener("touchstart", p, he);
      }
    );
  }, []);
  var b = e.removeScrollBar,
    x = e.inert;
  return a.exports.createElement(
    a.exports.Fragment,
    null,
    x ? a.exports.createElement(i, { styles: Oi(o) }) : null,
    b ? a.exports.createElement(er, { gapMode: "margin" }) : null
  );
}
const Li = Qn(Cr, Di);
var Pr = a.exports.forwardRef(function (e, t) {
  return a.exports.createElement(nt, G({}, e, { ref: t, sideCar: Li }));
});
Pr.classNames = nt.classNames;
const zi = Pr,
  Mr = "Dialog",
  [Ar, ec] = Ks(Mr),
  [Bi, Y] = Ar(Mr),
  _i = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: l = !0,
      } = e,
      s = a.exports.useRef(null),
      u = a.exports.useRef(null),
      [d = !1, p] = Js({ prop: r, defaultProp: o, onChange: i });
    return a.exports.createElement(
      Bi,
      {
        scope: t,
        triggerRef: s,
        contentRef: u,
        contentId: ft(),
        titleId: ft(),
        descriptionId: ft(),
        open: d,
        onOpenChange: p,
        onOpenToggle: a.exports.useCallback(() => p((m) => !m), [p]),
        modal: l,
      },
      n
    );
  },
  Tr = "DialogPortal",
  [Wi, Fr] = Ar(Tr, { forceMount: void 0 }),
  Vi = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      i = Y(Tr, t);
    return a.exports.createElement(
      Wi,
      { scope: t, forceMount: n },
      a.exports.Children.map(r, (l) =>
        a.exports.createElement(
          tt,
          { present: n || i.open },
          a.exports.createElement(wi, { asChild: !0, container: o }, l)
        )
      )
    );
  },
  Tt = "DialogOverlay",
  Ui = a.exports.forwardRef((e, t) => {
    const n = Fr(Tt, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = Y(Tt, e.__scopeDialog);
    return i.modal
      ? a.exports.createElement(
          tt,
          { present: r || i.open },
          a.exports.createElement(ji, D({}, o, { ref: t }))
        )
      : null;
  }),
  ji = a.exports.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Y(Tt, n);
    return a.exports.createElement(
      zi,
      { as: et, allowPinchZoom: !0, shards: [o.contentRef] },
      a.exports.createElement(
        fe.div,
        D({ "data-state": Ir(o.open) }, r, {
          ref: t,
          style: { pointerEvents: "auto", ...r.style },
        })
      )
    );
  }),
  Me = "DialogContent",
  Gi = a.exports.forwardRef((e, t) => {
    const n = Fr(Me, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = Y(Me, e.__scopeDialog);
    return a.exports.createElement(
      tt,
      { present: r || i.open },
      i.modal
        ? a.exports.createElement(Zi, D({}, o, { ref: t }))
        : a.exports.createElement(qi, D({}, o, { ref: t }))
    );
  }),
  Zi = a.exports.forwardRef((e, t) => {
    const n = Y(Me, e.__scopeDialog),
      r = a.exports.useRef(null),
      o = Te(t, n.contentRef, r);
    return (
      a.exports.useEffect(() => {
        const i = r.current;
        if (i) return Hn(i);
      }, []),
      a.exports.createElement(
        Nr,
        D({}, e, {
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: ce(e.onCloseAutoFocus, (i) => {
            var l;
            i.preventDefault(),
              (l = n.triggerRef.current) === null || l === void 0 || l.focus();
          }),
          onPointerDownOutside: ce(e.onPointerDownOutside, (i) => {
            const l = i.detail.originalEvent,
              s = l.button === 0 && l.ctrlKey === !0;
            (l.button === 2 || s) && i.preventDefault();
          }),
          onFocusOutside: ce(e.onFocusOutside, (i) => i.preventDefault()),
        })
      )
    );
  }),
  qi = a.exports.forwardRef((e, t) => {
    const n = Y(Me, e.__scopeDialog),
      r = a.exports.useRef(!1),
      o = a.exports.useRef(!1);
    return a.exports.createElement(
      Nr,
      D({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var l;
          if (
            ((l = e.onCloseAutoFocus) === null || l === void 0 || l.call(e, i),
            !i.defaultPrevented)
          ) {
            var s;
            r.current ||
              (s = n.triggerRef.current) === null ||
              s === void 0 ||
              s.focus(),
              i.preventDefault();
          }
          (r.current = !1), (o.current = !1);
        },
        onInteractOutside: (i) => {
          var l, s;
          (l = e.onInteractOutside) === null || l === void 0 || l.call(e, i),
            i.defaultPrevented ||
              ((r.current = !0),
              i.detail.originalEvent.type === "pointerdown" &&
                (o.current = !0));
          const u = i.target;
          ((s = n.triggerRef.current) === null || s === void 0
            ? void 0
            : s.contains(u)) && i.preventDefault(),
            i.detail.originalEvent.type === "focusin" &&
              o.current &&
              i.preventDefault();
        },
      })
    );
  }),
  Nr = a.exports.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        ...l
      } = e,
      s = Y(Me, n),
      u = a.exports.useRef(null),
      d = Te(t, u);
    return (
      $i(),
      a.exports.createElement(
        a.exports.Fragment,
        null,
        a.exports.createElement(
          gi,
          {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
          },
          a.exports.createElement(
            fi,
            D(
              {
                role: "dialog",
                id: s.contentId,
                "aria-describedby": s.descriptionId,
                "aria-labelledby": s.titleId,
                "data-state": Ir(s.open),
              },
              l,
              { ref: d, onDismiss: () => s.onOpenChange(!1) }
            )
          )
        ),
        !1
      )
    );
  }),
  Hi = "DialogTitle",
  Ki = a.exports.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Y(Hi, n);
    return a.exports.createElement(fe.h2, D({ id: o.titleId }, r, { ref: t }));
  }),
  Xi = "DialogDescription",
  Yi = a.exports.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Y(Xi, n);
    return a.exports.createElement(
      fe.p,
      D({ id: o.descriptionId }, r, { ref: t })
    );
  }),
  Qi = "DialogClose",
  Ji = a.exports.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Y(Qi, n);
    return a.exports.createElement(
      fe.button,
      D({ type: "button" }, r, {
        ref: t,
        onClick: ce(e.onClick, () => o.onOpenChange(!1)),
      })
    );
  });
function Ir(e) {
  return e ? "open" : "closed";
}
const el = _i,
  Or = Vi,
  Rr = Ui,
  Dr = Gi,
  Lr = Ki,
  zr = Yi,
  tl = Ji;
var nl = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const rl = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  ol = (e, t) => {
    const n = a.exports.forwardRef(
      (
        {
          color: r = "currentColor",
          size: o = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: l,
          children: s,
          ...u
        },
        d
      ) =>
        a.exports.createElement(
          "svg",
          {
            ref: d,
            ...nl,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: l ? (Number(i) * 24) / Number(o) : i,
            className: `lucide lucide-${rl(e)}`,
            ...u,
          },
          [
            ...t.map(([p, m]) => a.exports.createElement(p, m)),
            ...((Array.isArray(s) ? s : [s]) || []),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
var al = ol;
const sl = al("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function il() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = Br(t)) && (r && (r += " "), (r += n));
  return r;
}
function Br(e) {
  if (typeof e == "string") return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = Br(e[r])) && (n && (n += " "), (n += t));
  return n;
}
var qt = "-";
function ll(e) {
  var t = dl(e),
    n = e.conflictingClassGroups,
    r = e.conflictingClassGroupModifiers,
    o = r === void 0 ? {} : r;
  function i(s) {
    var u = s.split(qt);
    return u[0] === "" && u.length !== 1 && u.shift(), _r(u, t) || cl(s);
  }
  function l(s, u) {
    var d = n[s] || [];
    return u && o[s] ? [].concat(d, o[s]) : d;
  }
  return { getClassGroupId: i, getConflictingClassGroupIds: l };
}
function _r(e, t) {
  var l;
  if (e.length === 0) return t.classGroupId;
  var n = e[0],
    r = t.nextPart.get(n),
    o = r ? _r(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length !== 0) {
    var i = e.join(qt);
    return (l = t.validators.find(function (s) {
      var u = s.validator;
      return u(i);
    })) == null
      ? void 0
      : l.classGroupId;
  }
}
var Mn = /^\[(.+)\]$/;
function cl(e) {
  if (Mn.test(e)) {
    var t = Mn.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function dl(e) {
  var t = e.theme,
    n = e.prefix,
    r = { nextPart: new Map(), validators: [] },
    o = fl(Object.entries(e.classGroups), n);
  return (
    o.forEach(function (i) {
      var l = i[0],
        s = i[1];
      Ft(s, r, l, t);
    }),
    r
  );
}
function Ft(e, t, n, r) {
  e.forEach(function (o) {
    if (typeof o == "string") {
      var i = o === "" ? t : An(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (ul(o)) {
        Ft(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(function (l) {
      var s = l[0],
        u = l[1];
      Ft(u, An(t, s), n, r);
    });
  });
}
function An(e, t) {
  var n = e;
  return (
    t.split(qt).forEach(function (r) {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function ul(e) {
  return e.isThemeGetter;
}
function fl(e, t) {
  return t
    ? e.map(function (n) {
        var r = n[0],
          o = n[1],
          i = o.map(function (l) {
            return typeof l == "string"
              ? t + l
              : typeof l == "object"
              ? Object.fromEntries(
                  Object.entries(l).map(function (s) {
                    var u = s[0],
                      d = s[1];
                    return [t + u, d];
                  })
                )
              : l;
          });
        return [r, i];
      })
    : e;
}
function pl(e) {
  if (e < 1) return { get: function () {}, set: function () {} };
  var t = 0,
    n = new Map(),
    r = new Map();
  function o(i, l) {
    n.set(i, l), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get: function (l) {
      var s = n.get(l);
      if (s !== void 0) return s;
      if ((s = r.get(l)) !== void 0) return o(l, s), s;
    },
    set: function (l, s) {
      n.has(l) ? n.set(l, s) : o(l, s);
    },
  };
}
var Wr = "!";
function ml(e) {
  var t = e.separator || ":",
    n = t.length === 1,
    r = t[0],
    o = t.length;
  return function (l) {
    for (var s = [], u = 0, d = 0, p, m = 0; m < l.length; m++) {
      var g = l[m];
      if (u === 0) {
        if (g === r && (n || l.slice(m, m + o) === t)) {
          s.push(l.slice(d, m)), (d = m + o);
          continue;
        }
        if (g === "/") {
          p = m;
          continue;
        }
      }
      g === "[" ? u++ : g === "]" && u--;
    }
    var b = s.length === 0 ? l : l.substring(d),
      x = b.startsWith(Wr),
      f = x ? b.substring(1) : b,
      h = p && p > d ? p - d : void 0;
    return {
      modifiers: s,
      hasImportantModifier: x,
      baseClassName: f,
      maybePostfixModifierPosition: h,
    };
  };
}
function gl(e) {
  if (e.length <= 1) return e;
  var t = [],
    n = [];
  return (
    e.forEach(function (r) {
      var o = r[0] === "[";
      o ? (t.push.apply(t, n.sort().concat([r])), (n = [])) : n.push(r);
    }),
    t.push.apply(t, n.sort()),
    t
  );
}
function vl(e) {
  return { cache: pl(e.cacheSize), splitModifiers: ml(e), ...ll(e) };
}
var hl = /\s+/;
function bl(e, t) {
  var n = t.splitModifiers,
    r = t.getClassGroupId,
    o = t.getConflictingClassGroupIds,
    i = new Set();
  return e
    .trim()
    .split(hl)
    .map(function (l) {
      var s = n(l),
        u = s.modifiers,
        d = s.hasImportantModifier,
        p = s.baseClassName,
        m = s.maybePostfixModifierPosition,
        g = r(m ? p.substring(0, m) : p),
        b = Boolean(m);
      if (!g) {
        if (!m) return { isTailwindClass: !1, originalClassName: l };
        if (((g = r(p)), !g))
          return { isTailwindClass: !1, originalClassName: l };
        b = !1;
      }
      var x = gl(u).join(":"),
        f = d ? x + Wr : x;
      return {
        isTailwindClass: !0,
        modifierId: f,
        classGroupId: g,
        originalClassName: l,
        hasPostfixModifier: b,
      };
    })
    .reverse()
    .filter(function (l) {
      if (!l.isTailwindClass) return !0;
      var s = l.modifierId,
        u = l.classGroupId,
        d = l.hasPostfixModifier,
        p = s + u;
      return i.has(p)
        ? !1
        : (i.add(p),
          o(u, d).forEach(function (m) {
            return i.add(s + m);
          }),
          !0);
    })
    .reverse()
    .map(function (l) {
      return l.originalClassName;
    })
    .join(" ");
}
function xl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r,
    o,
    i,
    l = s;
  function s(d) {
    var p = t[0],
      m = t.slice(1),
      g = m.reduce(function (b, x) {
        return x(b);
      }, p());
    return (r = vl(g)), (o = r.cache.get), (i = r.cache.set), (l = u), u(d);
  }
  function u(d) {
    var p = o(d);
    if (p) return p;
    var m = bl(d, r);
    return i(d, m), m;
  }
  return function () {
    return l(il.apply(null, arguments));
  };
}
function B(e) {
  var t = function (r) {
    return r[e] || [];
  };
  return (t.isThemeGetter = !0), t;
}
var Vr = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  yl = /^\d+\/\d+$/,
  El = new Set(["px", "full", "screen"]),
  wl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Cl =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Sl = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function K(e) {
  return le(e) || El.has(e) || yl.test(e) || Nt(e);
}
function Nt(e) {
  return pe(e, "length", Tl);
}
function $l(e) {
  return pe(e, "size", Ur);
}
function kl(e) {
  return pe(e, "position", Ur);
}
function Pl(e) {
  return pe(e, "url", Fl);
}
function Ue(e) {
  return pe(e, "number", le);
}
function le(e) {
  return !Number.isNaN(Number(e));
}
function Ml(e) {
  return e.endsWith("%") && le(e.slice(0, -1));
}
function Ce(e) {
  return Tn(e) || pe(e, "number", Tn);
}
function I(e) {
  return Vr.test(e);
}
function Se() {
  return !0;
}
function Q(e) {
  return wl.test(e);
}
function Al(e) {
  return pe(e, "", Nl);
}
function pe(e, t, n) {
  var r = Vr.exec(e);
  return r ? (r[1] ? r[1] === t : n(r[2])) : !1;
}
function Tl(e) {
  return Cl.test(e);
}
function Ur() {
  return !1;
}
function Fl(e) {
  return e.startsWith("url(");
}
function Tn(e) {
  return Number.isInteger(Number(e));
}
function Nl(e) {
  return Sl.test(e);
}
function Il() {
  var e = B("colors"),
    t = B("spacing"),
    n = B("blur"),
    r = B("brightness"),
    o = B("borderColor"),
    i = B("borderRadius"),
    l = B("borderSpacing"),
    s = B("borderWidth"),
    u = B("contrast"),
    d = B("grayscale"),
    p = B("hueRotate"),
    m = B("invert"),
    g = B("gap"),
    b = B("gradientColorStops"),
    x = B("gradientColorStopPositions"),
    f = B("inset"),
    h = B("margin"),
    y = B("opacity"),
    S = B("padding"),
    v = B("saturate"),
    C = B("scale"),
    E = B("sepia"),
    A = B("skew"),
    T = B("space"),
    M = B("translate"),
    w = function () {
      return ["auto", "contain", "none"];
    },
    $ = function () {
      return ["auto", "hidden", "clip", "visible", "scroll"];
    },
    F = function () {
      return ["auto", I, t];
    },
    k = function () {
      return [I, t];
    },
    P = function () {
      return ["", K];
    },
    R = function () {
      return ["auto", le, I];
    },
    N = function () {
      return [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ];
    },
    z = function () {
      return ["solid", "dashed", "dotted", "double", "none"];
    },
    _ = function () {
      return [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
        "plus-lighter",
      ];
    },
    W = function () {
      return [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ];
    },
    V = function () {
      return ["", "0", I];
    },
    Z = function () {
      return [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ];
    },
    we = function () {
      return [le, Ue];
    },
    Fe = function () {
      return [le, I];
    };
  return {
    cacheSize: 500,
    theme: {
      colors: [Se],
      spacing: [K],
      blur: ["none", "", Q, I],
      brightness: we(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Q, I],
      borderSpacing: k(),
      borderWidth: P(),
      contrast: we(),
      grayscale: V(),
      hueRotate: Fe(),
      invert: V(),
      gap: k(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ml, Nt],
      inset: F(),
      margin: F(),
      opacity: we(),
      padding: k(),
      saturate: we(),
      scale: we(),
      sepia: V(),
      skew: Fe(),
      space: k(),
      translate: k(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", I] }],
      container: ["container"],
      columns: [{ columns: [Q] }],
      "break-after": [{ "break-after": Z() }],
      "break-before": [{ "break-before": Z() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none"] }],
      clear: [{ clear: ["left", "right", "both", "none"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [].concat(N(), [I]) }],
      overflow: [{ overflow: $() }],
      "overflow-x": [{ "overflow-x": $() }],
      "overflow-y": [{ "overflow-y": $() }],
      overscroll: [{ overscroll: w() }],
      "overscroll-x": [{ "overscroll-x": w() }],
      "overscroll-y": [{ "overscroll-y": w() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [f] }],
      "inset-x": [{ "inset-x": [f] }],
      "inset-y": [{ "inset-y": [f] }],
      start: [{ start: [f] }],
      end: [{ end: [f] }],
      top: [{ top: [f] }],
      right: [{ right: [f] }],
      bottom: [{ bottom: [f] }],
      left: [{ left: [f] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", Ce] }],
      basis: [{ basis: F() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", I] }],
      grow: [{ grow: V() }],
      shrink: [{ shrink: V() }],
      order: [{ order: ["first", "last", "none", Ce] }],
      "grid-cols": [{ "grid-cols": [Se] }],
      "col-start-end": [{ col: ["auto", { span: ["full", Ce] }, I] }],
      "col-start": [{ "col-start": R() }],
      "col-end": [{ "col-end": R() }],
      "grid-rows": [{ "grid-rows": [Se] }],
      "row-start-end": [{ row: ["auto", { span: [Ce] }, I] }],
      "row-start": [{ "row-start": R() }],
      "row-end": [{ "row-end": R() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", I] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", I] }],
      gap: [{ gap: [g] }],
      "gap-x": [{ "gap-x": [g] }],
      "gap-y": [{ "gap-y": [g] }],
      "justify-content": [{ justify: ["normal"].concat(W()) }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal"].concat(W(), ["baseline"]) }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [].concat(W(), ["baseline"]) }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [S] }],
      px: [{ px: [S] }],
      py: [{ py: [S] }],
      ps: [{ ps: [S] }],
      pe: [{ pe: [S] }],
      pt: [{ pt: [S] }],
      pr: [{ pr: [S] }],
      pb: [{ pb: [S] }],
      pl: [{ pl: [S] }],
      m: [{ m: [h] }],
      mx: [{ mx: [h] }],
      my: [{ my: [h] }],
      ms: [{ ms: [h] }],
      me: [{ me: [h] }],
      mt: [{ mt: [h] }],
      mr: [{ mr: [h] }],
      mb: [{ mb: [h] }],
      ml: [{ ml: [h] }],
      "space-x": [{ "space-x": [T] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [T] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", I, t] }],
      "min-w": [{ "min-w": ["min", "max", "fit", I, K] }],
      "max-w": [
        {
          "max-w": [
            "0",
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [Q] },
            Q,
            I,
          ],
        },
      ],
      h: [{ h: [I, t, "auto", "min", "max", "fit"] }],
      "min-h": [{ "min-h": ["min", "max", "fit", I, K] }],
      "max-h": [{ "max-h": [I, t, "min", "max", "fit"] }],
      "font-size": [{ text: ["base", Q, Nt] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            Ue,
          ],
        },
      ],
      "font-family": [{ font: [Se] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            I,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", le, Ue] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            I,
            K,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", I] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", I] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [y] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [y] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [].concat(z(), ["wavy"]) }],
      "text-decoration-thickness": [{ decoration: ["auto", "from-font", K] }],
      "underline-offset": [{ "underline-offset": ["auto", I, K] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      indent: [{ indent: k() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            I,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", I] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [y] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [].concat(N(), [kl]) }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", $l] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            Pl,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [x] }],
      "gradient-via-pos": [{ via: [x] }],
      "gradient-to-pos": [{ to: [x] }],
      "gradient-from": [{ from: [b] }],
      "gradient-via": [{ via: [b] }],
      "gradient-to": [{ to: [b] }],
      rounded: [{ rounded: [i] }],
      "rounded-s": [{ "rounded-s": [i] }],
      "rounded-e": [{ "rounded-e": [i] }],
      "rounded-t": [{ "rounded-t": [i] }],
      "rounded-r": [{ "rounded-r": [i] }],
      "rounded-b": [{ "rounded-b": [i] }],
      "rounded-l": [{ "rounded-l": [i] }],
      "rounded-ss": [{ "rounded-ss": [i] }],
      "rounded-se": [{ "rounded-se": [i] }],
      "rounded-ee": [{ "rounded-ee": [i] }],
      "rounded-es": [{ "rounded-es": [i] }],
      "rounded-tl": [{ "rounded-tl": [i] }],
      "rounded-tr": [{ "rounded-tr": [i] }],
      "rounded-br": [{ "rounded-br": [i] }],
      "rounded-bl": [{ "rounded-bl": [i] }],
      "border-w": [{ border: [s] }],
      "border-w-x": [{ "border-x": [s] }],
      "border-w-y": [{ "border-y": [s] }],
      "border-w-s": [{ "border-s": [s] }],
      "border-w-e": [{ "border-e": [s] }],
      "border-w-t": [{ "border-t": [s] }],
      "border-w-r": [{ "border-r": [s] }],
      "border-w-b": [{ "border-b": [s] }],
      "border-w-l": [{ "border-l": [s] }],
      "border-opacity": [{ "border-opacity": [y] }],
      "border-style": [{ border: [].concat(z(), ["hidden"]) }],
      "divide-x": [{ "divide-x": [s] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [s] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [y] }],
      "divide-style": [{ divide: z() }],
      "border-color": [{ border: [o] }],
      "border-color-x": [{ "border-x": [o] }],
      "border-color-y": [{ "border-y": [o] }],
      "border-color-t": [{ "border-t": [o] }],
      "border-color-r": [{ "border-r": [o] }],
      "border-color-b": [{ "border-b": [o] }],
      "border-color-l": [{ "border-l": [o] }],
      "divide-color": [{ divide: [o] }],
      "outline-style": [{ outline: [""].concat(z()) }],
      "outline-offset": [{ "outline-offset": [I, K] }],
      "outline-w": [{ outline: [K] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: P() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [y] }],
      "ring-offset-w": [{ "ring-offset": [K] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", Q, Al] }],
      "shadow-color": [{ shadow: [Se] }],
      opacity: [{ opacity: [y] }],
      "mix-blend": [{ "mix-blend": _() }],
      "bg-blend": [{ "bg-blend": _() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [u] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", Q, I] }],
      grayscale: [{ grayscale: [d] }],
      "hue-rotate": [{ "hue-rotate": [p] }],
      invert: [{ invert: [m] }],
      saturate: [{ saturate: [v] }],
      sepia: [{ sepia: [E] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [u] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [d] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [p] }],
      "backdrop-invert": [{ "backdrop-invert": [m] }],
      "backdrop-opacity": [{ "backdrop-opacity": [y] }],
      "backdrop-saturate": [{ "backdrop-saturate": [v] }],
      "backdrop-sepia": [{ "backdrop-sepia": [E] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [l] }],
      "border-spacing-x": [{ "border-spacing-x": [l] }],
      "border-spacing-y": [{ "border-spacing-y": [l] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            I,
          ],
        },
      ],
      duration: [{ duration: Fe() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", I] }],
      delay: [{ delay: Fe() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", I] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [C] }],
      "scale-x": [{ "scale-x": [C] }],
      "scale-y": [{ "scale-y": [C] }],
      rotate: [{ rotate: [Ce, I] }],
      "translate-x": [{ "translate-x": [M] }],
      "translate-y": [{ "translate-y": [M] }],
      "skew-x": [{ "skew-x": [A] }],
      "skew-y": [{ "skew-y": [A] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            I,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: ["appearance-none"],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            I,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": k() }],
      "scroll-mx": [{ "scroll-mx": k() }],
      "scroll-my": [{ "scroll-my": k() }],
      "scroll-ms": [{ "scroll-ms": k() }],
      "scroll-me": [{ "scroll-me": k() }],
      "scroll-mt": [{ "scroll-mt": k() }],
      "scroll-mr": [{ "scroll-mr": k() }],
      "scroll-mb": [{ "scroll-mb": k() }],
      "scroll-ml": [{ "scroll-ml": k() }],
      "scroll-p": [{ "scroll-p": k() }],
      "scroll-px": [{ "scroll-px": k() }],
      "scroll-py": [{ "scroll-py": k() }],
      "scroll-ps": [{ "scroll-ps": k() }],
      "scroll-pe": [{ "scroll-pe": k() }],
      "scroll-pt": [{ "scroll-pt": k() }],
      "scroll-pr": [{ "scroll-pr": k() }],
      "scroll-pb": [{ "scroll-pb": k() }],
      "scroll-pl": [{ "scroll-pl": k() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [
        {
          touch: [
            "auto",
            "none",
            "pinch-zoom",
            "manipulation",
            { pan: ["x", "left", "right", "y", "up", "down"] },
          ],
        },
      ],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", I] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [K, Ue] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
var Ol = xl(Il);
function ae(...e) {
  return Ol(Wn(e));
}
const Rl = el,
  jr = ({ className: e, ...t }) =>
    a.exports.createElement(Or, { className: ae(e), ...t });
jr.displayName = Or.displayName;
const Gr = a.exports.forwardRef(({ className: e, ...t }, n) =>
  a.exports.createElement(Rr, {
    ref: n,
    className: ae(
      "fixed inset-0 bg-white/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 dark:bg-slate-950/80 z-[calc(9e10)]",
      e
    ),
    ...t,
  })
);
Gr.displayName = Rr.displayName;
const Zr = a.exports.forwardRef(({ className: e, children: t, ...n }, r) =>
  a.exports.createElement(
    jr,
    null,
    a.exports.createElement(Gr, null),
    a.exports.createElement(
      Dr,
      {
        ref: r,
        className: ae(
          "fixed left-[50%] top-[50%] z-[calc(9e10)] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full dark:border-slate-800 dark:bg-slate-950",
          e
        ),
        ...n,
      },
      t,
      a.exports.createElement(
        tl,
        {
          className:
            "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-800 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400",
        },
        a.exports.createElement(sl, { className: "h-4 w-4" }),
        a.exports.createElement("span", { className: "sr-only" }, "Close")
      )
    )
  )
);
Zr.displayName = Dr.displayName;
const qr = ({ className: e, ...t }) =>
  a.exports.createElement("div", {
    className: ae("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t,
  });
qr.displayName = "DialogHeader";
const Hr = ({ className: e, ...t }) =>
  a.exports.createElement("div", {
    className: ae(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t,
  });
Hr.displayName = "DialogFooter";
const Kr = a.exports.forwardRef(({ className: e, ...t }, n) =>
  a.exports.createElement(Lr, {
    ref: n,
    className: ae("text-lg font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
Kr.displayName = Lr.displayName;
const It = a.exports.forwardRef(({ className: e, ...t }, n) =>
  a.exports.createElement(zr, {
    ref: n,
    className: ae("text-sm text-slate-500 dark:text-slate-400", e),
    ...t,
  })
);
It.displayName = zr.displayName;
const Fn = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  Nn = Wn,
  Dl = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Nn(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: i } = t,
      l = Object.keys(o).map((d) => {
        const p = n == null ? void 0 : n[d],
          m = i == null ? void 0 : i[d];
        if (p === null) return null;
        const g = Fn(p) || Fn(m);
        return o[d][g];
      }),
      s =
        n &&
        Object.entries(n).reduce((d, p) => {
          let [m, g] = p;
          return g === void 0 || (d[m] = g), d;
        }, {}),
      u =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((d, p) => {
              let { class: m, className: g, ...b } = p;
              return Object.entries(b).every((x) => {
                let [f, h] = x;
                return Array.isArray(h)
                  ? h.includes({ ...i, ...s }[f])
                  : { ...i, ...s }[f] === h;
              })
                ? [...d, m, g]
                : d;
            }, []);
    return Nn(
      e,
      l,
      u,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  },
  Ll = Dl(
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-800",
    {
      variants: {
        variant: {
          default:
            "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
          destructive:
            "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/90",
          outline:
            "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
          secondary:
            "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
          ghost:
            "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
          link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  Ot = a.exports.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
      const l = r ? et : "button";
      return a.exports.createElement(l, {
        className: ae(Ll({ variant: t, size: n, className: e })),
        ref: i,
        ...o,
      });
    }
  );
Ot.displayName = "Button";
function zl({ url: e }) {
  return c.createElement("img", { src: e });
}
function Bl({ url: e }) {
  const t = new URL(e);
  return t.host !== "youtube.com" && t.host !== "www.youtube.com"
    ? null
    : (t.searchParams.set("controls", "0"),
      t.searchParams.set("modestbranding", "1"),
      c.createElement("iframe", {
        sandbox:
          "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",
        className: "w-full h-full",
        src: t.toString(),
      }));
}
function _l({
  ad: {
    id: e,
    title: t,
    description: n,
    image: r,
    footer: o,
    videoUrl: i,
    canSetAsSeen: l,
    cta: s,
  },
  setAdsState: u,
}) {
  const d = ["wa.me", "api.whatsapp.com", "web.whatsapp.com"],
    p = (s == null ? void 0 : s.url) && d.some((m) => s.url.includes(m));
  return c.createElement(
    Rl,
    {
      defaultOpen: !0,
      onOpenChange: (m) => {
        m || u(void 0);
      },
    },
    c.createElement(
      Zr,
      { className: "sm:max-w-[425px]" },
      (t || n) &&
        c.createElement(
          qr,
          null,
          t && c.createElement(Kr, null, t),
          n && c.createElement(It, null, n)
        ),
      r && c.createElement(zl, { url: r }),
      i && c.createElement(Bl, { url: i }),
      o && c.createElement(It, null, o),
      c.createElement(
        Hr,
        null,
        l &&
          c.createElement(
            Ot,
            {
              onClick: () => {
                He({ type: "markAdAsSeen", adId: e }), u(void 0);
              },
              variant: "ghost",
            },
            "Marcar como visto"
          ),
        s &&
          c.createElement(
            Ot,
            {
              asChild: !0,
              onClick: () => {
                He({ type: "openAdCta", adId: e, ctaUrl: s.url }),
                  s.closeAfterClick && u(void 0);
              },
              variant: "default",
              className:
                "bg-zap-purple text-slate-50 hover:bg-zap-purple/80 dark:bg-zap-purple dark:text-slate-50 dark:hover:bg-zap-purple/80",
            },
            c.createElement(
              "a",
              { href: s.url, target: p ? "_self" : "_blank" },
              s.text
            )
          )
      )
    )
  );
}
function Wl() {
  const e = [];
  function t(o) {
    e.push(o);
  }
  async function n(o) {
    return new Promise((i) => {
      const l = Xe();
      let s = !1;
      function u() {
        (s = !0), window.removeEventListener(l, u), i(!0);
      }
      window.addEventListener(l, u),
        setTimeout(() => {
          s || u();
        }, 1e4),
        e.push({ ...o, promiseIdPassed: l });
    });
  }
  async function r() {
    if (e.length > 0) {
      const o = e.shift();
      if (o) {
        const i = await Ye(o.chatId);
        i
          ? await Bs(
              o.itemId,
              i,
              o.avoidToast,
              o.premiumDrilling,
              o.promiseIdPassed
            )
          : L.error(
              `N\xE3o foi poss\xEDvel enviar o item para o chat ${o.chatId}`
            );
      }
    }
    setTimeout(r, 100);
  }
  return r(), { queue: e, add: t, addAndWait: n };
}
const X = Wl();
function Vl(e, t) {
  Lt({
    type: "bulkSendStarted",
    timestamp: Date.now(),
    metadata: {
      amount: e.targetNumbers.length,
      itemType: e.item.type,
      delayMax: e.delay.max,
      delayMin: e.delay.min,
    },
  });
  let n,
    r = !1;
  function o() {
    r = !0;
    for (const i of n || [])
      ((i == null ? void 0 : i.status) === "running" ||
        (i == null ? void 0 : i.status) === "pending") &&
        (n = t(
          {
            target: i.phone_number,
            status: "pending",
            message: "Disparo interrompido",
          },
          n
        ));
  }
  return (
    new Promise(async (i) => {
      const { targetNumbers: l, delay: s, item: u } = e;
      for (const d of l) {
        if (r) break;
        const p = je(s.min * 1e3, s.max * 1e3);
        n = t(
          {
            target: d,
            status: "running",
            message: `Checando o n\xFAmero ${d}`,
          },
          n
        );
        try {
          const m = await Ye(`55${d}@c.us`);
          if (!m)
            n = t(
              {
                target: d,
                status: "error",
                message: "N\xFAmero n\xE3o encontrado",
              },
              n
            );
          else {
            if (
              ((n = t(
                {
                  target: d,
                  status: "running",
                  message: `Ser\xE1 enviado em ${Math.round(p / 1e3)} segundos`,
                },
                n
              )),
              await yt(p),
              r)
            )
              break;
            await X.addAndWait({
              itemId: u.id,
              chatId: m.id.toString(),
              avoidToast: !0,
            }),
              (n = t(
                {
                  target: d,
                  status: "success",
                  message: "Enviado com sucesso",
                },
                n
              ));
          }
        } catch {
          n = t(
            { target: d, status: "error", message: "N\xFAmero inv\xE1lido" },
            n
          );
        }
      }
      L.success("Envio finalizado"), i(!0);
    }),
    () => {
      o();
    }
  );
}
function Ul({
  funnel: e,
  chat: t,
  changeFunnelStatus: n,
  generatedId: r,
  delayAtStart: o,
}) {
  const i = e.data || [];
  let l = !1;
  function s() {
    O.ChatPresence.markPaused(t),
      (l = !0),
      n(r, "stopped", void 0),
      L.info(`Funil ${e.name} Interrompido no chat ${t.formattedTitle}`);
  }
  function u(d) {
    async function p() {
      t.presence.subscribe(),
        O.ChatPresence.sendPresenceAvailable(),
        O.ChatPresence.markPaused(t),
        l ||
          ((d.type === "mensagens" || d.type === "audios") &&
            (d.type === "mensagens"
              ? await O.ChatPresence.markComposing(t)
              : d.type === "audios" &&
                (await O.ChatPresence.markRecording(t))));
    }
    p();
    const m = d.type === "mensagens" ? 500 : 5e3;
    return setInterval(p, je(m, m + 1e3));
  }
  return (
    new Promise(async (d) => {
      for (const [p, m] of i.entries()) {
        if (l) {
          O.ChatPresence.markPaused(t);
          break;
        }
        const { delay: g, id: b } = m,
          x = g > 0 ? je(g, g + 1500) : je(500, 1300);
        if (
          (setTimeout(() => {
            n(r, "running", {
              expectDeliveryTimestamp: Date.now() + x + ((p === 0 && o) || 0),
              type: m.type,
              queuePosition: p + 1,
              queueLength: i.length,
            });
          }, 1e3),
          p === 0 && o && o > 0 && (await yt(o), l))
        ) {
          O.ChatPresence.markPaused(t);
          break;
        }
        const f = u(m);
        await yt(x),
          l ||
            X.add({
              itemId: b,
              chatId: t.id.toString(),
              avoidToast: !0,
              premiumDrilling: !0,
            }),
          clearInterval(f),
          O.ChatPresence.markPaused(t);
      }
      O.ChatPresence.markPaused(t), !l && n(r, "done", void 0), d(!0);
    }),
    { funnelId: e.id, stopFunction: s }
  );
}
function jl() {
  const e = [];
  function t(o, i, l) {
    const s = e.find(
        (d) =>
          d.generatedId === o &&
          (d.status === "queued" || d.status === "running")
      ),
      u = s && e.indexOf(s);
    s &&
      typeof u < "u" &&
      !Number.isNaN(u) &&
      u > -1 &&
      e.splice(u, 1, { ...s, status: i, current: l });
  }
  async function n(o, i, l) {
    const s = Xe(),
      u = e.find((m) => m.targetId === i && m.status === "running"),
      d = await Ye(i);
    if (u) {
      L.info(
        `Um funil j\xE1 est\xE1 sendo disparado para ${
          d == null ? void 0 : d.formattedTitle
        }, cancelando...`
      );
      return;
    }
    const { stopFunction: p } = Ul({
      funnel: o,
      chat: d,
      changeFunnelStatus: t,
      generatedId: s,
      delayAtStart: l,
    });
    e.push({
      generatedId: s,
      funnel: o,
      targetId: d.id.toString(),
      stopFunction: p,
      status: "queued",
      current: void 0,
    }),
      Lt({
        type: "funnelSent",
        timestamp: Date.now(),
        metadata: { funnelId: o.id },
      });
  }
  function r() {
    return e;
  }
  return { queue: e, add: n, getFunnels: r, changeFunnelStatus: t };
}
const rt = jl();
function Gl() {
  var T, M;
  const { isPremium: e, keyData: t, refreshPremium: n, getPremium: r } = Vt(),
    { flags: o } = Zt(),
    {
      shouldAskToSendShortcuts: i,
      shouldHideShortcuts: l,
      shouldHideCurrentFunnelPopover: s,
      shouldMentionAllUsersOnGroup: u,
    } = Ut(),
    [d, p] = a.exports.useState(),
    [m, g] = a.exports.useState(),
    [b, x] = a.exports.useState(),
    [f, h] = a.exports.useState(),
    [y, S] = a.exports.useState();
  async function v() {
    var F, k;
    const w = document.querySelector("#main");
    if (l) {
      g(void 0),
        (F = w == null ? void 0 : w.parentElement) == null ||
          F.classList.remove("zvWithShortcuts");
      return;
    }
    const $ = await Bo();
    g($),
      $ &&
        Object.values($).filter((P) => P.length > 0).length > 0 &&
        ((k = w == null ? void 0 : w.parentElement) == null ||
          k.classList.add("zvWithShortcuts"));
  }
  a.exports.useEffect(() => {
    const w = setInterval(() => {
      var F;
      const $ = qe();
      if ((p($), $ && !document.getElementById("currentFunnelWrapper"))) {
        const k = document.createElement("div");
        (k.id = "currentFunnelWrapper"),
          (k.style.cssText = `
          position: fixed;
          transform: translate(10px, 10px);
            `),
          (F = document.querySelector(
            "[data-testid=conversation-panel-messages]"
          )) == null || F.appendChild(k);
      }
    }, 1e3);
    return () => clearInterval(w);
  }, []);
  const C = async (w) => {
    function $(F) {
      F && window.dispatchEvent(new CustomEvent(F));
    }
    try {
      const { detail: F } = w,
        { type: k, item: P } = F;
      if (k === "toast") {
        L[P.type](P.message);
        return;
      }
      if (k === "ads") {
        const { item: W } = F;
        h(W);
        return;
      }
      const { chatTargetId: R, promiseId: N, avoidToast: z } = F;
      if (k === "funis") {
        x(P);
        return;
      }
      if (k === "bulk") {
        S(P), $(N);
        return;
      }
      const _ = R ? await Ye(R) : ee();
      if (!_ && !R) {
        L.error(
          "Nenhum chat aberto, clique na conversa desejada antes de enviar um item"
        ),
          $(N);
        return;
      }
      if (!_ && !!R) {
        L.error(`Chat(${R}) n\xE3o encontrado`), $(N);
        return;
      }
      if (k === "directFunnel") {
        if (($(N), !e)) return;
        rt.add(P, _.id.toString(), F.delayAtStart);
        return;
      }
      if (k === "mensagens") {
        const W = Ro(String(P.data), _, u)
          .then((V) => {
            $(N);
          })
          .catch((V) => {
            throw ($(N), V);
          });
        z ||
          L.promise(W, {
            pending: "Enviando mensagem...",
            success: "Mensagem enviada!",
            error: "Erro ao enviar a mensagem.",
          });
        return;
      }
      if (k === "audios") {
        const { premium: W } = F;
        if ((r(), !e && !W && (await On(P.data)) > 60)) {
          L.error(
            `${t} => O audio n\xE3o pode ser enviado porque excede o limite de 60 segundos, considere assinar a vers\xE3o PREMIUM `,
            { theme: "colored", autoClose: 3e3 }
          ),
            $(N),
            n();
          return;
        }
        if (P.sendAsForwarded) {
          const V = Yt(P.data, _, void 0, u)
            .then((Z) => {
              $(N);
            })
            .catch((Z) => {
              throw ($(N), Z);
            });
          z ||
            L.promise(V, {
              pending: "Enviando \xE1udio...",
              success: "\xC1udio enviado!",
              error: "Erro ao enviar o \xE1udio.",
            });
        } else {
          const V = Io(P.data, _, u)
            .then((Z) => {
              $(N);
            })
            .catch((Z) => {
              throw (
                ($(N),
                L.error(
                  typeof Z == "string"
                    ? Z
                    : JSON.stringify(Z.toString ? Z.toString() : Z),
                  { autoClose: 5e3 }
                ),
                Z)
              );
            });
          z ||
            L.promise(V, {
              pending: "Enviando \xE1udio...",
              success: "\xC1udio enviado!",
              error: "Erro ao enviar o \xE1udio.",
            });
        }
        return;
      }
      if (k === "medias") {
        const W = Yt(P.data, _, P.caption, u)
          .then((V) => {
            $(N);
          })
          .catch((V) => {
            throw ($(N), V);
          });
        z ||
          L.promise(W, {
            pending: "Enviando m\xEDdia...",
            success: "M\xEDdia enviada!",
            error: "Erro ao enviar a m\xEDdia.",
          });
        return;
      }
      if (k === "docs") {
        const W = Oo(P.data, _, P.fileName, u)
          .then((V) => {
            $(N);
          })
          .catch((V) => {
            throw ($(N), V);
          });
        z ||
          L.promise(W, {
            pending: "Enviando documento...",
            success: "Documento enviado!",
            error: "Erro ao enviar o documento.",
          });
      }
      _.composeQuotedMsg = null;
    } catch (F) {
      console.log(F),
        L.error(
          typeof F == "string"
            ? F
            : JSON.stringify(F.toString ? F.toString() : F),
          { autoClose: 5e3 }
        );
    }
  };
  function E({ triggers: w, chatTitle: $, chatTargetId: F }) {
    if (w.length === 0) return;
    w.length > 1 &&
      L.info(
        c.createElement(
          "div",
          { className: "flex flex-col" },
          c.createElement(
            "span",
            null,
            "Mais de um gatilho correspondente no chat ",
            $,
            ", enviando o primeiro encontrado."
          ),
          c.createElement(
            "span",
            { className: "underline text-zap-blue" },
            "Lista: "
          ),
          c.createElement(
            "ol",
            null,
            w.map((N) =>
              c.createElement("li", { key: N.triggerId }, " - ", N.name)
            )
          )
        )
      );
    const [k] = w,
      { funnelId: P, secondsBeforeSend: R } = k;
    zs(P, F, R),
      Lt({
        type: "triggerFired",
        timestamp: Date.now(),
        metadata: { triggerId: k.triggerId },
      });
  }
  const A = (w) => {
    var $;
    (w == null ? void 0 : w.type) === "ciphertext" &&
      (w == null ||
        w.once("change:type", () => {
          queueMicrotask(() => {
            A(w);
          });
        })),
      (w == null ? void 0 : w.isNewMsg) &&
        !(($ = w == null ? void 0 : w.id) != null && $.fromMe) &&
        (w == null ? void 0 : w.type) === "chat" &&
        queueMicrotask(async () => {
          const F = w == null ? void 0 : w.body;
          if (!F) return;
          const k = await _o({ message: F });
          if (k.length === 0) return;
          if (k.length > 0 && !e) {
            n();
            return;
          }
          const P = Gt(w == null ? void 0 : w.id.remote.toString()),
            R =
              !!P.isUser &&
              !!P.contact.isAddressBookContact &&
              P.formattedTitle.replace(/\D/g, "") !== P.id.user;
          if (!!P.isGroup) {
            const z = k.filter((_) => !_.dontSendToGroups);
            E({
              chatTargetId: P == null ? void 0 : P.id.toString(),
              chatTitle: P == null ? void 0 : P.formattedTitle,
              triggers: z,
            });
          } else if (R) {
            const z = k.filter((_) => !_.dontSendToContact);
            E({
              chatTargetId: P == null ? void 0 : P.id.toString(),
              chatTitle: P == null ? void 0 : P.formattedTitle,
              triggers: z,
            });
          } else
            E({
              chatTargetId: P == null ? void 0 : P.id.toString(),
              chatTitle: P == null ? void 0 : P.formattedTitle,
              triggers: k,
            });
        });
  };
  return (
    a.exports.useEffect(
      () => (
        O == null || O.Msg.on("add", A),
        () => {
          O == null || O.Msg.off("add", A);
        }
      ),
      [e, t, o]
    ),
    a.exports.useEffect(() => {
      const w = setInterval(async () => {
        var k, P;
        const $ = document.querySelector('#main [contenteditable="true"]');
        document.querySelector("#main") &&
          !(
            (k = document.getElementById("actionsContainerZV")) != null &&
            k.innerHTML
          ) &&
          !l &&
          (await v()),
          !!(
            (P = document.getElementById("actionsContainerZV")) != null &&
            P.innerHTML
          ) &&
            !l &&
            $ &&
            !$.onkeyup &&
            !!document.getElementById("actionsContainerZV") &&
            document.getElementById("actionsContainerZV").children.length > 0 &&
            (($.onkeyup = (R) => {
              var z;
              const N = (z = R.target) == null ? void 0 : z.textContent;
              Array.from(
                document.getElementById("actionsContainerZV").children
              ).forEach((_) => {
                const W = _.innerText;
                N && !Kt(W).toLowerCase().includes(Kt(N).toLowerCase())
                  ? (_.style.display = "none")
                  : (_.style.display = "block");
              });
            }),
            ($.onblur = (R) => {
              !!$ &&
                !$.textContent &&
                !!document.getElementById("actionsContainerZV") &&
                document.getElementById("actionsContainerZV").children
                  .length !==
                  Array.from(
                    document.getElementById("actionsContainerZV").children
                  ).filter((N) => N.style.display === "block").length &&
                Array.from(
                  document.getElementById("actionsContainerZV").children
                ).forEach((N) => {
                  N.style.display = "block";
                });
            }));
      }, 1e3);
      return () => {
        clearInterval(w);
      };
    }, [i, l, s]),
    a.exports.useEffect(
      () => (
        window.addEventListener(St.eventName, C),
        () => {
          window.removeEventListener(St.eventName, C);
        }
      ),
      [e, t, u]
    ),
    c.createElement(
      c.Fragment,
      null,
      c.createElement("div", {
        id: "zv-injected",
        className: "invisible hidden",
      }),
      f && c.createElement(_l, { ad: f, setAdsState: h }),
      b && c.createElement(Ao, { funnel: b, setFunnelPopUp: x }),
      y && c.createElement(Zs, { bulk: y }),
      !s &&
        document.getElementById("main") &&
        d &&
        c.createElement(
          ut,
          { container: document.getElementById("main") },
          c.createElement(Ds, { chatId: d.targetId, setCurrentFunnel: p })
        ),
      document.getElementById("configPopoverZV") &&
        c.createElement(
          ut,
          { container: document.getElementById("configPopoverZV") },
          c.createElement(
            xr,
            null,
            c.createElement(
              "div",
              { className: " w-7 h-7 mx-2" },
              c.createElement(yr, { style: { width: "100%", height: "100%" } })
            )
          )
        ),
      !l &&
        ((T = document.getElementById("main")) == null
          ? void 0
          : T.parentElement) &&
        m &&
        Object.values(m).filter((w) => w.length > 0).length > 0 &&
        c.createElement(
          ut,
          {
            container:
              (M = document.getElementById("main")) == null
                ? void 0
                : M.parentElement,
          },
          c.createElement(
            "div",
            {
              id: "actionsWrapperZV",
              className: `
          flex items-center justify-between w-[98%] absolute bottom-0 z-[9999999990]
          `,
            },
            c.createElement(Es, {
              currentActionIndexes: m,
              setFunnelPopUp: x,
              reloadCurrentActionIndexes: v,
            })
          )
        )
    )
  );
}
async function ht(e) {
  return new Promise((t, n) => {
    chrome.runtime.sendMessage(
      H,
      { type: "getSmallItemFromStorage", data: { id: e } },
      async ({ type: r, response: o }) =>
        r === "getSmallItemFromStorage" && t(o.item)
    );
  });
}
async function bt(e) {
  for (const t in e) localStorage.setItem(t, e[t]);
}
Ln.setAppElement("#app");
try {
  Vn();
} catch (e) {
  console.log(e);
}
function Zl() {
  ht("chave").then((e) => {
    !e || bt({ chave: e });
  }),
    ht("nmb").then((e) => {
      !e || bt({ nmb: e });
    }),
    ht("wppVersion").then((e) => {
      !e || bt({ wppVersion: e });
    });
}
Zl();
const ql = setInterval(() => {
  var e;
  if (Ze && _t) {
    if ((clearInterval(ql), !document.getElementById("rootZV"))) {
      const t = document.createElement("div");
      (t.id = "rootZV"), document.body.appendChild(t);
    }
    if (!document.getElementById("configPopoverZV")) {
      const t = document.createElement("div");
      (t.id = "configPopoverZV"),
        (e = document.querySelector(".two header")) == null || e.appendChild(t);
    }
    po
      .createRoot(document.getElementById("rootZV"))
      .render(
        c.createElement(
          c.StrictMode,
          null,
          c.createElement(
            Wo,
            null,
            c.createElement(
              zo,
              null,
              c.createElement(
                xs,
                null,
                c.createElement(mo, {
                  theme: "dark",
                  hideProgressBar: !1,
                  newestOnTop: !1,
                  closeOnClick: !0,
                  rtl: !1,
                  pauseOnFocusLoss: !1,
                  draggable: !0,
                  pauseOnHover: !0,
                  position: "top-center",
                  autoClose: 2e3,
                }),
                c.createElement(Gl, null),
                c.createElement(go, null)
              )
            )
          ),
          c.createElement(vo, null)
        )
      ),
      H
        ? L.success(
            c.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "1rem",
                },
              },
              c.createElement("span", null, "ZapEC carregado!"),
              c.createElement("span", null, "Seu Whatsapp Web agora tem"),
              c.createElement(
                "span",
                {
                  style: {
                    background: "linear-gradient(to bottom, #6CB2ED, #8D1AF1)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginTop: "0.5rem",
                  },
                },
                "Habilidades e Superpoderes!!"
              )
            ),
            { autoClose: 3e3 }
          )
        : L.error(
            "ID da extens\xE3o n\xE3o localizado, recarregue a p\xE1gina"
          );
  }
}, 1e3);
