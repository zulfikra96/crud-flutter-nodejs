--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.14
-- Dumped by pg_dump version 9.5.14

-- Started on 2018-11-16 02:36:16 WIB

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12395)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2161 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 184 (class 1259 OID 25179)
-- Name: todo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.todo (
    todo_id integer NOT NULL,
    user_id integer NOT NULL,
    start_time timestamp without time zone,
    end_time timestamp without time zone,
    title character varying(40) NOT NULL,
    description character varying(200),
    path_files character varying(200),
    created_at timestamp with time zone
);


ALTER TABLE public.todo OWNER TO postgres;

--
-- TOC entry 183 (class 1259 OID 25177)
-- Name: todo_todo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.todo_todo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.todo_todo_id_seq OWNER TO postgres;

--
-- TOC entry 2162 (class 0 OID 0)
-- Dependencies: 183
-- Name: todo_todo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.todo_todo_id_seq OWNED BY public.todo.todo_id;


--
-- TOC entry 182 (class 1259 OID 25065)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    username character varying(20) NOT NULL,
    fullname character varying(40) NOT NULL,
    password character varying(255) NOT NULL,
    role character varying(6),
    token character varying(255),
    created_at timestamp with time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 181 (class 1259 OID 25063)
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO postgres;

--
-- TOC entry 2163 (class 0 OID 0)
-- Dependencies: 181
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- TOC entry 2027 (class 2604 OID 25182)
-- Name: todo_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.todo ALTER COLUMN todo_id SET DEFAULT nextval('public.todo_todo_id_seq'::regclass);


--
-- TOC entry 2026 (class 2604 OID 25068)
-- Name: user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- TOC entry 2152 (class 0 OID 25179)
-- Dependencies: 184
-- Data for Name: todo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.todo (todo_id, user_id, start_time, end_time, title, description, path_files, created_at) FROM stdin;
2	1	2018-11-21 09:18:00	2018-11-19 05:18:00	belajar	hello hgsfjjhgsdggggxc	/opt/lampp/htdocs/FULLSTACK/crud-fullstack/crud-api/controllers/../storage/1/images/15-10-2018-23:12:272.jpg	2018-11-15 23:19:12.273812+07
4	1	2018-11-20 09:51:00	2018-11-26 06:15:00	adfsxzgr	dyfdacbhddc	/opt/lampp/htdocs/FULLSTACK/crud-fullstack/crud-api/controllers/../storage/1/images/16-10-2018-0:43:0.jpg	2018-11-16 00:52:43.019314+07
5	1	2018-11-20 09:51:00	2018-11-26 06:15:00	adfsxzgr	dyfdacbhddc	/opt/lampp/htdocs/FULLSTACK/crud-fullstack/crud-api/controllers/../storage/1/images/16-10-2018-0:38:344.jpg	2018-11-16 00:54:38.347021+07
6	1	2018-11-20 09:51:00	2018-11-26 06:15:00	adfsxzgr	dyfdacbhddc	/opt/lampp/htdocs/FULLSTACK/crud-fullstack/crud-api/controllers/../storage/1/images/16-10-2018-0:19:895.jpg	2018-11-16 00:55:19.897582+07
7	1	2018-11-20 09:51:00	2018-11-26 06:15:00	adfsxzgr	dyfdacbhddc	/opt/lampp/htdocs/FULLSTACK/crud-fullstack/crud-api/controllers/../storage/1/images/16-10-2018-0:37:400.jpg	2018-11-16 00:55:37.4032+07
8	1	2018-11-20 09:51:00	2018-11-26 06:15:00	adfsxzgr	dyfdacbhddc	/opt/lampp/htdocs/FULLSTACK/crud-fullstack/crud-api/controllers/../storage/1/images/16-10-2018-0:50:460.jpg	2018-11-16 00:55:50.462115+07
9	1	2018-11-20 09:51:00	2018-11-26 06:15:00	adfsxzgr	dyfdacbhddc	/opt/lampp/htdocs/FULLSTACK/crud-fullstack/crud-api/controllers/../storage/1/images/16-10-2018-0:8:266.jpg	2018-11-16 00:56:08.268193+07
\.


--
-- TOC entry 2164 (class 0 OID 0)
-- Dependencies: 183
-- Name: todo_todo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.todo_todo_id_seq', 10, true);


--
-- TOC entry 2150 (class 0 OID 25065)
-- Dependencies: 182
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (user_id, username, fullname, password, role, token, created_at) FROM stdin;
2	zulfikra2	zulfikra	7b6c151d9ca313e458cdc7b4b32b	tamu	\N	2018-11-09 18:06:45.807067+07
3	zulfikra3	zulfikra	91f582f61e36ba859b929437322b	tamu	\N	2018-11-09 18:07:50.853965+07
4	zulfikralahmudin	zulfikra lahmudin abjul	64609538537add68c9efc48ba9dd	tamu	\N	2018-11-12 00:05:27.47988+07
1	zulfikra1	zulfikra	897741ef00befbb5ac0720264826	tamu	de624b9e554cfd3099668670c3a49ab94aa2523b8f54702580162d8647119b97765b27b53a3cbbca69ece9ff3106386de67282b72d3d8e16a0ae44508a8ebf3ccc3b94c260989fd8d669	\N
\.


--
-- TOC entry 2165 (class 0 OID 0)
-- Dependencies: 181
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_user_id_seq', 6, true);


--
-- TOC entry 2033 (class 2606 OID 25184)
-- Name: todo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.todo
    ADD CONSTRAINT todo_pkey PRIMARY KEY (todo_id);


--
-- TOC entry 2029 (class 2606 OID 25073)
-- Name: users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- TOC entry 2031 (class 2606 OID 25075)
-- Name: users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- TOC entry 2034 (class 2606 OID 25185)
-- Name: todo_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.todo
    ADD CONSTRAINT todo_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id) ON DELETE CASCADE;


--
-- TOC entry 2160 (class 0 OID 0)
-- Dependencies: 6
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2018-11-16 02:36:17 WIB

--
-- PostgreSQL database dump complete
--

