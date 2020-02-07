--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1 (Debian 12.1-1.pgdg100+1)
-- Dumped by pg_dump version 12.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: favbb; Type: DATABASE; Schema: -; Owner: app_user
--

CREATE DATABASE favbb WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';


ALTER DATABASE favbb OWNER TO app_user;

\connect favbb

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: connections; Type: TABLE; Schema: public; Owner: app_user
--

CREATE TABLE public.connections (
    id bigint NOT NULL,
    "from" text NOT NULL,
    "to" text NOT NULL
);


ALTER TABLE public.connections OWNER TO app_user;

--
-- Name: user; Type: TABLE; Schema: public; Owner: app_user
--

CREATE TABLE public."user" (
    id bigint NOT NULL,
    name text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public."user" OWNER TO app_user;

--
-- Name: user_x_connections; Type: TABLE; Schema: public; Owner: app_user
--

CREATE TABLE public.user_x_connections (
    user_id bigint NOT NULL,
    connection_id bigint NOT NULL,
    id bigint NOT NULL
);


ALTER TABLE public.user_x_connections OWNER TO app_user;

--
-- Data for Name: connections; Type: TABLE DATA; Schema: public; Owner: app_user
--

COPY public.connections (id, "from", "to") FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: app_user
--

COPY public."user" (id, name, password) FROM stdin;
\.


--
-- Data for Name: user_x_connections; Type: TABLE DATA; Schema: public; Owner: app_user
--

COPY public.user_x_connections (user_id, connection_id, id) FROM stdin;
\.


--
-- Name: connections connections_pkey; Type: CONSTRAINT; Schema: public; Owner: app_user
--

ALTER TABLE ONLY public.connections
    ADD CONSTRAINT connections_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: app_user
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: user_x_connections user_x_connections_pkey; Type: CONSTRAINT; Schema: public; Owner: app_user
--

ALTER TABLE ONLY public.user_x_connections
    ADD CONSTRAINT user_x_connections_pkey PRIMARY KEY (id);


--
-- Name: fki_user_id_fkey; Type: INDEX; Schema: public; Owner: app_user
--

CREATE INDEX fki_user_id_fkey ON public.user_x_connections USING btree (user_id);


--
-- Name: user_x_connections connection_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: app_user
--

ALTER TABLE ONLY public.user_x_connections
    ADD CONSTRAINT connection_id_fkey FOREIGN KEY (user_id) REFERENCES public.connections(id);


--
-- Name: user_x_connections user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: app_user
--

ALTER TABLE ONLY public.user_x_connections
    ADD CONSTRAINT user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- PostgreSQL database dump complete
--

